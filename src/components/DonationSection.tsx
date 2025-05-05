import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Banknote } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import DonationVisualization from './DonationVisualization';

const DonationSection = () => {
  const [amount, setAmount] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const [lastDonationAmount, setLastDonationAmount] = useState<number>(0);
  const { toast } = useToast();
  
  const predefinedAmounts = ["5", "10", "25", "50", "100", "500"];

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set the last donation amount for the visualization
    setLastDonationAmount(Number(amount));
    
    // Show the animation
    setShowAnimation(true);
    
    toast({
      title: "Thank you for your donation!",
      description: `Your donation of $${amount} will help provide essential aid to families in Gaza.`,
    });
    
    // Reset form after a brief delay
    setTimeout(() => {
      setAmount("");
      setName("");
      setEmail("");
    }, 2500);
  };

  const handleAnimationComplete = () => {
    // Reset animation flag after animation completes
    setTimeout(() => {
      setShowAnimation(false);
    }, 1000);
  };

  return (
    <section id="donate" className="py-20 bg-gaza-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Make a Donation</h2>
        <p className="text-center text-lg text-gaza-dark max-w-2xl mx-auto mb-12">
          Your support provides essential aid to those affected by the crisis. Every donation makes a meaningful difference in someone's life.
        </p>
        
        {/* Donation Visualization */}
        <DonationVisualization 
          lastDonationAmount={lastDonationAmount}
          showAnimation={showAnimation}
          onAnimationComplete={handleAnimationComplete}
        />

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <Tabs defaultValue="onetime" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="onetime">One-time Donation</TabsTrigger>
                <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
              </TabsList>
              
              <TabsContent value="onetime">
                <form onSubmit={handleDonation} className="space-y-6">
                  <div>
                    <label className="block text-gaza-dark font-medium mb-2">
                      Select Amount
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
                      {predefinedAmounts.map((amt) => (
                        <Button
                          type="button"
                          key={amt}
                          variant={amount === amt ? "default" : "outline"}
                          onClick={() => setAmount(amt)}
                          className={`${amount === amt ? 'bg-gaza-primary text-white' : 'bg-white'}`}
                        >
                          ${amt}
                        </Button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        type="number"
                        placeholder="Other amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gaza-dark font-medium mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gaza-dark font-medium mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full donation-button"
                    disabled={!amount || !name || !email}
                  >
                    <Banknote className="mr-2" size={20} />
                    Donate ${amount || '0'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="monthly">
                <form onSubmit={handleDonation} className="space-y-6">
                  <div>
                    <label className="block text-gaza-dark font-medium mb-2">
                      Select Monthly Amount
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
                      {["10", "25", "50", "75", "100", "200"].map((amt) => (
                        <Button
                          type="button"
                          key={amt}
                          variant={amount === amt ? "default" : "outline"}
                          onClick={() => setAmount(amt)}
                          className={`${amount === amt ? 'bg-gaza-primary text-white' : 'bg-white'}`}
                        >
                          ${amt}
                        </Button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                      <Input
                        type="number"
                        placeholder="Other amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="pl-8"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gaza-dark font-medium mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gaza-dark font-medium mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full donation-button"
                    disabled={!amount || !name || !email}
                  >
                    <Banknote className="mr-2" size={20} />
                    Donate ${amount || '0'} Monthly
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
