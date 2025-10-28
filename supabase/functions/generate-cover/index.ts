import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface RequestPayload {
  name: string;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { name }: RequestPayload = await req.json();

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Name is required and must be a non-empty string" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    if (!supabaseUrl) {
      throw new Error("SUPABASE_URL environment variable not set");
    }

    const baseImageUrl = `${supabaseUrl}/storage/v1/object/public/assets/Cover_Page.png`;
    const nameText = name.trim().toUpperCase();
    
    console.log(`Generating cover data for: ${nameText}`);

    const data = {
      success: true,
      baseImageUrl,
      name: nameText,
      textPosition: {
        x: 512,
        y: 580,
      },
      textStyle: {
        fontSize: Math.min(80, 600 / nameText.length),
        color: "#6A4A8A",
        strokeColor: "#FFFFFF",
        strokeWidth: 3,
        fontFamily: "Arial, sans-serif",
        fontWeight: "bold",
      },
    };

    return new Response(
      JSON.stringify(data),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "Cache-Control": "public, max-age=3600",
        },
      }
    );
  } catch (error) {
    console.error("Error generating cover:", error);
    
    return new Response(
      JSON.stringify({
        error: "Failed to generate cover data",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
