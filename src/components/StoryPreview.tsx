import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download } from "lucide-react";

interface StorySegment {
  letter: string;
  character: string;
  text: string;
}

interface StoryPreviewProps {
  name: string;
  intro: string;
  segments: StorySegment[];
  conclusion: string;
}

export const StoryPreview = ({ name, intro, segments, conclusion }: StoryPreviewProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card className="p-8 bg-card shadow-glow">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <BookOpen className="text-primary animate-float" />
            {name}'s Magical Adventure
          </h2>
          <Button variant="secondary" size="lg">
            <Download className="mr-2" />
            Save Story
          </Button>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed">{intro}</p>
          
          {segments.map((segment, index) => (
            <div key={index} className="border-l-4 border-primary/30 pl-6 py-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl font-bold text-primary animate-sparkle">
                  {segment.letter}
                </span>
                <h3 className="text-xl font-semibold text-secondary">
                  {segment.character}
                </h3>
              </div>
              <p className="text-base leading-relaxed text-foreground/90">
                {segment.text}
              </p>
            </div>
          ))}
          
          <p className="text-lg leading-relaxed font-medium text-primary/90 pt-4">
            {conclusion}
          </p>
        </div>
      </Card>
      
      <div className="text-center">
        <Button 
          variant="hero" 
          size="xl"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Create Another Story
        </Button>
      </div>
    </div>
  );
};
