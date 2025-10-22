import { useState } from "react";
import { StoryPersonalizer } from "@/components/StoryPersonalizer";
import { StoryPreview } from "@/components/StoryPreview";
import { generateStory, type GeneratedStory } from "@/lib/storyGenerator";
import { BookOpen, Sparkles, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-magical-book.jpg";

const Index = () => {
  const [story, setStory] = useState<GeneratedStory | null>(null);

  const handleGenerateStory = (name: string, gender: "boy" | "girl") => {
    const generatedStory = generateStory(name, gender);
    setStory(generatedStory);
    
    setTimeout(() => {
      document.getElementById("story-preview")?.scrollIntoView({ 
        behavior: "smooth",
        block: "start" 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <Sparkles className="w-16 h-16 text-primary animate-sparkle mx-auto mb-4" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-magical bg-clip-text text-transparent">
                Every Name
              </span>
              <br />
              <span className="text-foreground">
                Tells a Story
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Create a personalized magical adventure where your child becomes the hero of their own storybook journey
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How the Magic Happens
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-magical rounded-full flex items-center justify-center mx-auto shadow-glow">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Enter a Name</h3>
              <p className="text-muted-foreground">
                Type in the child's name and watch the magic begin
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto shadow-glow">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Story Comes Alive</h3>
              <p className="text-muted-foreground">
                Each letter creates a unique adventure with magical characters
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Create Memories</h3>
              <p className="text-muted-foreground">
                Preview and save a personalized story they'll treasure forever
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Personalizer */}
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

      {/* Story Preview */}
      {story && (
        <section id="story-preview" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <StoryPreview
              name={story.name}
              intro={story.intro}
              segments={story.segments}
              conclusion={story.conclusion}
            />
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Users className="w-12 h-12 text-primary mx-auto animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Perfect for Ages 0-8
            </h2>
            <p className="text-lg text-muted-foreground">
              Our personalized storybooks help children discover the magic in their own names 
              through engaging adventures with delightful characters. Each story is crafted 
              to inspire imagination, build confidence, and create lasting memories.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Magical Name Stories. Creating adventures one name at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
