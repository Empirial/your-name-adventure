import { useEffect, useRef, useState } from "react";

interface CoverData {
  success: boolean;
  baseImageUrl: string;
  name: string;
  textPosition: {
    x: number;
    y: number;
  };
  textStyle: {
    fontSize: number;
    color: string;
    strokeColor: string;
    strokeWidth: number;
    fontFamily: string;
    fontWeight: string;
  };
}

interface PersonalizedCoverProps {
  name: string;
  className?: string;
  onError?: (error: string) => void;
}

export const PersonalizedCover = ({ name, className = "", onError }: PersonalizedCoverProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateCover = async () => {
      if (!name || !canvasRef.current) return;

      setIsLoading(true);
      setError(null);

      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        const response = await fetch(`${supabaseUrl}/functions/v1/generate-cover`, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${supabaseKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name }),
        });

        if (!response.ok) {
          throw new Error(`Failed to generate cover: ${response.status}`);
        }

        const coverData: CoverData = await response.json();

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          throw new Error("Failed to get canvas context");
        }

        const img = new Image();
        img.crossOrigin = "anonymous";

        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 0, 0);

          const { textPosition, textStyle } = coverData;

          ctx.font = `${textStyle.fontWeight} ${textStyle.fontSize}px ${textStyle.fontFamily}`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          ctx.strokeStyle = textStyle.strokeColor;
          ctx.lineWidth = textStyle.strokeWidth;
          ctx.strokeText(coverData.name, textPosition.x, textPosition.y);

          ctx.fillStyle = textStyle.color;
          ctx.fillText(coverData.name, textPosition.x, textPosition.y);

          setIsLoading(false);
        };

        img.onerror = () => {
          const errorMsg = "Failed to load base image";
          setError(errorMsg);
          onError?.(errorMsg);
          setIsLoading(false);
        };

        img.src = coverData.baseImageUrl;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : "Failed to generate cover";
        setError(errorMsg);
        onError?.(errorMsg);
        setIsLoading(false);
      }
    };

    generateCover();
  }, [name, onError]);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-muted rounded-lg ${className}`}>
        <p className="text-destructive text-sm">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded-lg">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-lg shadow-lg"
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
};
