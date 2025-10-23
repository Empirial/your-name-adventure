import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Sparkles, Heart, Users, Star, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-magical-book.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-subtle">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              Personalized Storybooks for Your Little One
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-magical bg-clip-text text-transparent">
                Every Name
              </span>
              <br />
              <span className="text-foreground">
                Tells a Story
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Watch your child light up as they discover their name comes to life in a beautifully illustrated adventure. Perfect for bedtime stories and building confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate('/create')}
              >
                Create Your Story
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-primary" />
                <span className="font-medium">Ages 0-8</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium">Ships in 2-4 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creating a magical storybook is simple and takes just minutes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center space-y-4 bg-card shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <div className="w-20 h-20 bg-gradient-magical rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
                1
              </div>
              <h3 className="text-2xl font-bold">Enter a Name</h3>
              <p className="text-muted-foreground leading-relaxed">
                Simply type your child's name and select their gender. Our system creates a unique adventure for each letter.
              </p>
            </Card>
            
            <Card className="p-8 text-center space-y-4 bg-card shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <div className="w-20 h-20 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent font-bold text-sm">
                2
              </div>
              <h3 className="text-2xl font-bold">Preview the Magic</h3>
              <p className="text-muted-foreground leading-relaxed">
                See the complete story with characters for each letter. Review and customize before ordering.
              </p>
            </Card>
            
            <Card className="p-8 text-center space-y-4 bg-card shadow-card hover:shadow-glow transition-all duration-300 border-0">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary font-bold text-sm">
                3
              </div>
              <h3 className="text-2xl font-bold">Receive & Cherish</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your premium hardcover book arrives in 2-4 days. Watch your child's face light up!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Parents Love It */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Parents Choose Us
              </h2>
              <p className="text-lg text-muted-foreground">
                More than just a book—it's a keepsake they'll treasure forever
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-3 bg-card shadow-soft border-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Perfect for All Ages</h3>
                <p className="text-muted-foreground">
                  Designed for children aged 0-8, growing with your child from baby to early reader.
                </p>
              </Card>

              <Card className="p-6 space-y-3 bg-card shadow-soft border-0">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Premium Quality</h3>
                <p className="text-muted-foreground">
                  High-quality printing on durable hardcover. Built to withstand countless bedtime readings.
                </p>
              </Card>

              <Card className="p-6 space-y-3 bg-card shadow-soft border-0">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Builds Confidence</h3>
                <p className="text-muted-foreground">
                  Seeing themselves as the hero helps children develop self-esteem and name recognition.
                </p>
              </Card>

              <Card className="p-6 space-y-3 bg-card shadow-soft border-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Educational & Fun</h3>
                <p className="text-muted-foreground">
                  Each letter introduces vocabulary, animals, and magical characters that spark imagination.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
            <Sparkles className="w-16 h-16 mx-auto animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Create Magic?
            </h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Join thousands of parents who've created unforgettable memories. Your child's adventure begins with their name.
            </p>
            <div className="pt-4">
              <Button 
                variant="secondary"
                size="xl"
                onClick={() => navigate('/create')}
                className="bg-white text-primary hover:bg-white/90 shadow-glow"
              >
                Start Your Story Now
              </Button>
              <p className="text-sm mt-4 opacity-75">
                Only R499 • Free Preview • Ships in 2-4 Days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 The Jewel That Is My Name. Creating magical adventures one name at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
