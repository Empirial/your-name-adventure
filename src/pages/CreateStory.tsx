import { useNavigate } from "react-router-dom";
import { StoryPersonalizer } from "@/components/StoryPersonalizer";
import { generateStory } from "@/lib/storyGenerator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, BookOpen } from "lucide-react";

const CreateStory = () => {
  const navigate = useNavigate();

  const handleGenerateStory = (name: string, gender: "boy" | "girl") => {
    const generatedStory = generateStory(name, gender);
    navigate('/preview', { state: { story: generatedStory } });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2 font-bold text-lg">
            <Sparkles className="w-5 h-5 text-primary" />
            The Jewel That Is My Name
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-2">
              <BookOpen className="w-4 h-4" />
              Step 1 of 3
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Create Your <span className="bg-gradient-magical bg-clip-text text-transparent">Magical Story</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Enter your child's name and let us craft a personalized adventure they'll treasure forever
            </p>
          </div>
          
          <StoryPersonalizer onGenerate={handleGenerateStory} />
        </div>
      </section>
    </div>
  );
};

export default CreateStory;
