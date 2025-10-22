import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Sparkles, Wand2 } from "lucide-react";

interface StoryPersonalizerProps {
  onGenerate: (name: string, gender: "boy" | "girl") => void;
}

export const StoryPersonalizer = ({ onGenerate }: StoryPersonalizerProps) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<"boy" | "girl">("boy");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError("Please enter a name");
      return;
    }
    
    if (name.length < 2 || name.length > 15) {
      setError("Name must be between 2 and 15 characters");
      return;
    }
    
    if (!/^[a-zA-Z]+$/.test(name)) {
      setError("Please use only letters");
      return;
    }
    
    setError("");
    onGenerate(name.trim(), gender);
  };

  return (
    <Card className="w-full max-w-xl mx-auto p-8 md:p-10 shadow-card border-0 bg-card">
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-magical rounded-2xl shadow-glow mx-auto">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold">Let's Begin the Magic</h2>
          <p className="text-muted-foreground text-lg">
            Tell us about your little hero
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-base font-semibold">Child's Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter their name..."
              className="h-12 text-lg border-2 focus:border-primary transition-colors"
            />
            {error && (
              <p className="text-sm text-destructive flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-destructive rounded-full"></span>
                {error}
              </p>
            )}
          </div>

          <div className="space-y-3">
            <Label className="text-base font-semibold">Select Gender</Label>
            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant={gender === "boy" ? "default" : "outline"}
                className="h-14 text-base font-semibold"
                onClick={() => setGender("boy")}
              >
                Boy
              </Button>
              <Button
                type="button"
                variant={gender === "girl" ? "default" : "outline"}
                className="h-14 text-base font-semibold"
                onClick={() => setGender("girl")}
              >
                Girl
              </Button>
            </div>
          </div>

          <Button type="submit" size="xl" className="w-full" variant="hero">
            <Wand2 className="mr-2 w-5 h-5" />
            Create My Story
          </Button>
          
          <p className="text-center text-sm text-muted-foreground">
            Preview your story instantly • No payment required
          </p>
        </form>
      </div>
    </Card>
  );
};
