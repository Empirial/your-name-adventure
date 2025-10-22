import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, ShoppingCart, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/create')} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Create New
          </Button>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              Step 2 of 3
            </div>
          </div>
        </div>
      </header>

      {/* Story Preview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="w-full max-w-4xl mx-auto space-y-8">
            {/* Preview Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                {story.name}'s Magical Adventure
              </h1>
              <p className="text-muted-foreground text-lg">
                Preview your personalized storybook
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-card shadow-card border-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-magical rounded-xl flex items-center justify-center shadow-glow">
                  <BookOpen className="text-white w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{story.name}'s Story</h2>
                  <p className="text-sm text-muted-foreground">22 pages • Hardcover</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-8">
                <p className="text-lg leading-relaxed text-foreground">{story.intro}</p>
                
                {story.segments.map((segment, index) => (
                  <div key={index} className="space-y-4 animate-fade-in">
                    <div className="flex items-center gap-4 py-4">
                      <div className="w-16 h-16 bg-gradient-magical rounded-2xl flex items-center justify-center shadow-glow shrink-0">
                        <span className="text-3xl font-bold text-white">
                          {segment.letter}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {segment.character}
                        </h3>
                        <p className="text-sm text-muted-foreground">Chapter {index + 1}</p>
                      </div>
                    </div>
                    
                    {/* Illustration Placeholder */}
                    <div className="my-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted h-72 md:h-96 flex items-center justify-center border-2 border-dashed border-primary/20 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-magical opacity-5"></div>
                      <div className="text-center space-y-3 relative z-10">
                        <div className="text-7xl md:text-8xl font-bold text-primary/30">{segment.letter}</div>
                        <p className="text-sm text-muted-foreground font-medium px-4">
                          Beautiful illustration of {segment.character}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-base leading-relaxed text-foreground/90 bg-muted/30 p-6 rounded-xl">
                      {segment.text}
                    </p>

                    {index < story.segments.length - 1 && (
                      <div className="flex items-center gap-2 py-4">
                        <div className="h-px bg-border flex-1"></div>
                        <Sparkles className="w-4 h-4 text-primary" />
                        <div className="h-px bg-border flex-1"></div>
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="bg-gradient-magical/10 p-8 rounded-2xl border-2 border-primary/20">
                  <p className="text-lg leading-relaxed font-semibold text-primary text-center">
                    {story.conclusion}
                  </p>
                </div>
              </div>
            </Card>
            
            {/* CTA Section */}
            <Card className="p-8 bg-gradient-hero text-white border-0 shadow-glow">
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Love What You See?
                  </h3>
                  <p className="text-white/90 text-lg">
                    Get this beautifully printed hardcover book delivered in 2-4 days
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    variant="secondary"
                    size="xl"
                    onClick={() => navigate('/checkout', { state: { story } })}
                    className="bg-white text-primary hover:bg-white/90 shadow-glow w-full sm:w-auto"
                  >
                    <ShoppingCart className="mr-2 w-5 h-5" />
                    Order for R499
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl"
                    onClick={() => navigate('/create')}
                    className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 w-full sm:w-auto"
                  >
                    Create Another
                  </Button>
                </div>

                <p className="text-sm text-white/75">
                  ✓ Premium Hardcover • ✓ 22 Full Pages • ✓ Fast Shipping
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreviewStory;
