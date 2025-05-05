
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gaza-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gaza-primary leading-tight mb-6">
              Support Gaza <br />
              <span className="text-gaza-accent">Humanitarian Aid</span>
            </h1>
            <p className="text-lg md:text-xl text-gaza-dark mb-8 max-w-xl">
              Your donations provide essential food, medical care, and shelter to Palestinian families affected by the ongoing crisis. Help us make a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => document.getElementById('donate')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-md transition-all"
              >
                Donate Now
              </Button>
              <Button 
                onClick={() => document.getElementById('news')?.scrollIntoView({behavior: 'smooth'})}
                variant="outline"
                className="hover:bg-yellow-500 hover:text-white border-2 border-gaza-primary"
              >
                Latest Updates
              </Button>
            </div>
          </div>
          
          {/* Right image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gaza-primary rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                alt="Gaza children in need of humanitarian aid" 
                className="rounded-lg shadow-2xl w-full h-auto object-cover max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gaza-dark mb-2">Learn More</span>
        <ArrowDown className="animate-bounce text-yellow-500" size={24} />
      </div>
    </section>
  );
};

export default Hero;
