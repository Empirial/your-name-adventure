import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, ShoppingCart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { GeneratedStory, StorySegment } from "@/lib/storyGenerator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import CoverPageImg from "@/assets/Cover_Page.png";

const getImagePath = (segment: StorySegment): string => {
  const characterName = segment.character.replace(/\s+/g, '-');
  return `/images/story/${characterName}.jpg`;
};

const PreviewStory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const story = location.state?.story as GeneratedStory | undefined;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!story) {
      navigate('/create');
    }
  }, [story, navigate]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
          <div className="w-full max-w-5xl mx-auto space-y-8">
            {/* Preview Header */}
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                {story.name}'s Magical Adventure
              </h1>
              <p className="text-muted-foreground text-lg">
                Preview your personalized storybook
              </p>
            </div>

            {/* Carousel Book Preview */}
            <div className="relative">
              <Carousel
                setApi={setApi}
                className="w-full max-w-4xl mx-auto"
                opts={{
                  align: "center",
                  loop: false,
                }}
              >
                <CarouselContent>
                  {/* Cover Page */}
                  <CarouselItem>
                    <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
                      <img
                        src={CoverPageImg}
                        alt="Cover Page"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-2xl" style={{
                            textShadow: '0 0 20px rgba(255,255,255,0.5), 0 4px 8px rgba(0,0,0,0.8)'
                          }}>
                            {story.name}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>

                  {/* Intro Page */}
                  <CarouselItem>
                    <Card className="aspect-[4/3] p-8 md:p-12 bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-2xl flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-magical rounded-xl flex items-center justify-center shadow-glow">
                          <BookOpen className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">{story.name}'s Story</h2>
                          <p className="text-sm text-muted-foreground">A Magical Adventure</p>
                        </div>
                      </div>
                      <div className="overflow-y-auto flex-1">
                        <p className="text-base md:text-lg leading-relaxed text-foreground">
                          {story.intro}
                        </p>
                      </div>
                    </Card>
                  </CarouselItem>

                  {/* Story Segment Pages */}
                  {story.segments.map((segment, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-2xl">
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100">
                          <img
                            src={getImagePath(segment)}
                            alt={segment.character}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>

                        {/* Fallback illustration if image doesn't load */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="text-9xl md:text-[12rem] font-bold text-primary/10">
                            {segment.letter}
                          </div>
                        </div>

                        {/* Text Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-magical rounded-xl flex items-center justify-center shadow-glow shrink-0">
                                <span className="text-2xl font-bold text-white">
                                  {segment.letter}
                                </span>
                              </div>
                              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                                {segment.character}
                              </h3>
                            </div>
                            <div className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl">
                              <p className="text-sm md:text-base leading-relaxed text-foreground">
                                {segment.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}

                  {/* Conclusion Page */}
                  <CarouselItem>
                    <Card className="aspect-[4/3] p-8 md:p-12 bg-gradient-magical text-white border-0 shadow-2xl flex flex-col justify-center items-center">
                      <div className="text-center space-y-6 max-w-2xl">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-lg md:text-xl leading-relaxed">
                          {story.conclusion}
                        </p>
                      </div>
                    </Card>
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious className="left-4 md:-left-12" />
                <CarouselNext className="right-4 md:-right-12" />
              </Carousel>

              {/* Page Counter */}
              <div className="text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  Page {current} of {count}
                </p>
              </div>
            </div>
            
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
