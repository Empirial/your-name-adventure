import { useNavigate } from "react-router-dom";
import { StoryPersonalizer } from "@/components/StoryPersonalizer";
import { generateStory } from "@/lib/storyGenerator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

const CreateStory = () => {
  const navigate = useNavigate();

  const handleGenerateStory = (name: string, gender: "boy" | "girl") => {
    const generatedStory = generateStory(name, gender);
    navigate('/preview', { state: { story: generatedStory } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2" />
            Back to Home
          </Button>
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Sparkles className="text-primary" />
            Magical Name Stories
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Create Your Magical Story
            </h2>
            <p className="text-xl text-muted-foreground">
              Every name is an adventure waiting to unfold
            </p>
          </div>
          
          <StoryPersonalizer onGenerate={handleGenerateStory} />
        </div>
      </section>
    </div>
  );
};

export default CreateStory;
