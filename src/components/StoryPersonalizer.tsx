import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

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
    <Card className="w-full max-w-xl mx-auto p-8 bg-card shadow-glow">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-lg font-semibold">
            Child's Name
          </Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name..."
            className="text-lg"
            maxLength={15}
          />
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <div className="space-y-3">
          <Label className="text-lg font-semibold">Story Character</Label>
          <RadioGroup value={gender} onValueChange={(value) => setGender(value as "boy" | "girl")}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="boy" id="boy" />
              <Label htmlFor="boy" className="cursor-pointer">Boy</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="girl" id="girl" />
              <Label htmlFor="girl" className="cursor-pointer">Girl</Label>
            </div>
          </RadioGroup>
        </div>

        <Button type="submit" variant="hero" size="xl" className="w-full">
          <Sparkles className="mr-2" />
          Create Magical Story
        </Button>
      </form>
    </Card>
  );
};
