import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ShoppingCart, CreditCard, Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import type { GeneratedStory } from "@/lib/storyGenerator";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const story = location.state?.story as GeneratedStory | undefined;
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: ""
  });

  const BOOK_PRICE = 499;
  const SHIPPING = 89;
  const TOTAL = BOOK_PRICE + SHIPPING;

  useEffect(() => {
    if (!story) {
      navigate('/create');
    }
  }, [story, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Placed Successfully! 🎉",
      description: `Your personalized book for ${story?.name} will be printed and shipped within 2-4 working days.`,
    });
    setTimeout(() => navigate('/'), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!story) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/preview', { state: { story } })} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Preview
          </Button>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm">
              <Sparkles className="w-4 h-4" />
              Step 3 of 3
            </div>
          </div>
        </div>
      </header>

      {/* Checkout Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Complete Your Order
              </h1>
              <p className="text-muted-foreground text-lg">
                Just one step away from creating lasting memories
              </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Order Summary - Sticky on desktop */}
              <div className="lg:col-span-2">
                <Card className="p-6 lg:sticky lg:top-24 shadow-card border-0 bg-card">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                    Order Summary
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-2 border-primary/10">
                      <div className="w-20 h-24 bg-gradient-magical rounded-lg flex items-center justify-center text-white text-3xl font-bold shadow-glow shrink-0">
                        {story.name[0]}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{story.name}'s Magical Adventure</h3>
                        <p className="text-sm text-muted-foreground mt-1">Personalized Hardcover Book</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>• 22 pages</span>
                          <span>• Premium quality</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex justify-between text-base">
                        <span className="text-muted-foreground">Book Price</span>
                        <span className="font-semibold">R{BOOK_PRICE}</span>
                      </div>
                      <div className="flex justify-between text-base">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-semibold">R{SHIPPING}</span>
                      </div>
                      <div className="flex justify-between text-xl font-bold pt-3 border-t">
                        <span>Total</span>
                        <span className="text-primary">R{TOTAL}</span>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Ships in 2-4 working days</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Premium hardcover quality</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">Beautifully illustrated</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Checkout Form */}
              <div className="lg:col-span-3">
                <Card className="p-6 md:p-8 shadow-card border-0 bg-card">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CreditCard className="text-primary w-6 h-6" />
                    Delivery Information
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName" className="text-base font-semibold">Full Name *</Label>
                        <Input 
                          id="fullName" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="h-12 mt-2 border-2"
                          required 
                        />
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                          <Input 
                            id="email" 
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="h-12 mt-2 border-2"
                            required 
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="phone" className="text-base font-semibold">Phone Number *</Label>
                          <Input 
                            id="phone" 
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+27 XX XXX XXXX"
                            className="h-12 mt-2 border-2"
                            required 
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="address" className="text-base font-semibold">Street Address *</Label>
                        <Input 
                          id="address" 
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main Street"
                          className="h-12 mt-2 border-2"
                          required 
                        />
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city" className="text-base font-semibold">City *</Label>
                          <Input 
                            id="city" 
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Cape Town"
                            className="h-12 mt-2 border-2"
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="postalCode" className="text-base font-semibold">Postal Code *</Label>
                          <Input 
                            id="postalCode" 
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="8001"
                            className="h-12 mt-2 border-2"
                            required 
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t space-y-4">
                      <Button type="submit" size="xl" className="w-full" variant="hero">
                        <CreditCard className="mr-2 w-5 h-5" />
                        Place Order • R{TOTAL}
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">
                        Your book will be printed and shipped within 2-4 working days
                      </p>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
