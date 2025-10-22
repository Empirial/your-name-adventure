import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ShoppingCart, CreditCard } from "lucide-react";
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

  const BOOK_PRICE = 499; // R499
  const SHIPPING = 89; // R89
  const TOTAL = BOOK_PRICE + SHIPPING;

  useEffect(() => {
    if (!story) {
      navigate('/create');
    }
  }, [story, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Placed! 🎉",
      description: `Your personalized book for ${story?.name} will be printed and shipped soon.`,
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/preview', { state: { story } })}>
            <ArrowLeft className="mr-2" />
            Back to Preview
          </Button>
          <h1 className="text-xl font-bold flex items-center gap-2">
            <ShoppingCart className="text-primary" />
            Checkout
          </h1>
        </div>
      </header>

      {/* Checkout Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <Card className="p-6 h-fit">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="w-16 h-20 bg-gradient-magical rounded flex items-center justify-center text-white text-2xl font-bold">
                    {story.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}'s Magical Adventure</h3>
                    <p className="text-sm text-muted-foreground">Personalized Storybook</p>
                    <p className="text-sm text-muted-foreground">22 pages, Hardcover</p>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span>Book Price</span>
                    <span className="font-semibold">R{BOOK_PRICE}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">R{SHIPPING}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t">
                    <span>Total</span>
                    <span>R{TOTAL}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Checkout Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CreditCard className="text-primary" />
                Delivery Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input 
                    id="fullName" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input 
                    id="address" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code *</Label>
                    <Input 
                      id="postalCode" 
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Place Order - R{TOTAL}
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Ships within 2-4 working days
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
