import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, ShoppingCart } from "lucide-react";
import { useEffect } from "react";
import type { GeneratedStory } from "@/lib/storyGenerator";

const PreviewStory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const story = location.state?.story as GeneratedStory | undefined;

  useEffect(() => {
    if (!story) {
      navigate('/create');
    }
  }, [story, navigate]);

  if (!story) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/create')}>
            <ArrowLeft className="mr-2" />
            Create New Story
          </Button>
          <h1 className="text-xl font-bold">Story Preview</h1>
        </div>
      </header>

      {/* Story Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <Card className="p-8 bg-card shadow-glow">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <BookOpen className="text-primary animate-float" />
                  {story.name}'s Magical Adventure
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg leading-relaxed">{story.intro}</p>
                
                {story.segments.map((segment, index) => (
                  <div key={index} className="border-l-4 border-primary/30 pl-6 py-4 animate-fade-in">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl font-bold text-primary animate-sparkle">
                        {segment.letter}
                      </span>
                      <h3 className="text-xl font-semibold text-secondary">
                        {segment.character}
                      </h3>
                    </div>
                    
                    {/* Placeholder for character image */}
                    <div className="my-4 rounded-lg bg-muted/50 h-64 flex items-center justify-center border-2 border-dashed border-primary/20">
                      <div className="text-center space-y-2">
                        <div className="text-6xl">{segment.letter}</div>
                        <p className="text-sm text-muted-foreground">Illustration of {segment.character}</p>
                      </div>
                    </div>
                    
                    <p className="text-base leading-relaxed text-foreground/90">
                      {segment.text}
                    </p>
                  </div>
                ))}
                
                <p className="text-lg leading-relaxed font-medium text-primary/90 pt-4">
                  {story.conclusion}
                </p>
              </div>
            </Card>
            
            <div className="flex justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => navigate('/create')}
              >
                Create Another Story
              </Button>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => navigate('/checkout', { state: { story } })}
              >
                <ShoppingCart className="mr-2" />
                Order Your Book
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviewStory;
