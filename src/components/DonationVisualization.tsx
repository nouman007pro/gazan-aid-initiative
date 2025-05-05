
import React, { useState, useEffect } from 'react';
import { HandCoins, Bed } from 'lucide-react';

interface DonationVisualizationProps {
  lastDonationAmount?: number;
  showAnimation: boolean;
  onAnimationComplete?: () => void;
}

const DonationVisualization = ({ 
  lastDonationAmount = 0, 
  showAnimation = false,
  onAnimationComplete
}: DonationVisualizationProps) => {
  const [animationState, setAnimationState] = useState<'idle' | 'giving' | 'complete'>('idle');
  
  useEffect(() => {
    if (showAnimation && animationState === 'idle') {
      setAnimationState('giving');
      
      // After animation completes, set to complete state
      const timer = setTimeout(() => {
        setAnimationState('complete');
        if (onAnimationComplete) onAnimationComplete();
      }, 2000); // Animation duration
      
      return () => clearTimeout(timer);
    }
  }, [showAnimation, onAnimationComplete, animationState]);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gaza-primary text-center mb-6">
        Your Donation In Action
      </h3>
      
      <div className="relative h-40 flex items-center justify-center">
        {/* Rich hand with food */}
        <div className={`absolute left-2 transition-all duration-1000 ease-in-out flex flex-col items-center
          ${animationState === 'idle' ? 'opacity-100' : 'opacity-50'}
          ${animationState === 'giving' ? 'transform translate-x-20' : ''}
        `}>
          <div className="bg-amber-50 p-4 rounded-full shadow-md">
            <HandCoins 
              size={48} 
              className="text-gaza-accent"
            />
          </div>
          
          {/* Food item that moves */}
          <div className={`absolute top-6 left-12 transition-all duration-1000 ease-in-out
            ${animationState === 'idle' ? 'opacity-100' : ''}
            ${animationState === 'giving' ? 'transform translate-x-20' : ''}
          `}>
            <Bed 
              size={24} 
              className="text-amber-700"
            />
          </div>
          
          <span className="mt-2 font-semibold text-gaza-dark">Donor</span>
        </div>
        
        {/* Arrow in middle */}
        <div className="text-gray-400 text-4xl font-thin">→</div>
        
        {/* Poor hand */}
        <div className={`absolute right-2 transition-all duration-700 ease-in-out flex flex-col items-center
          ${animationState === 'complete' ? 'opacity-100' : 'opacity-50'}
        `}>
          <div className="bg-gaza-light p-4 rounded-full shadow-md">
            <HandCoins 
              size={48} 
              className={`text-gaza-primary ${animationState === 'complete' ? 'animate-pulse' : ''}`} 
            />
          </div>
          
          {/* Food received */}
          <div className={`absolute top-6 right-12 transition-opacity duration-300
            ${animationState === 'complete' ? 'opacity-100' : 'opacity-0'}
          `}>
            <Bed 
              size={24}
              className="text-amber-700" 
            />
          </div>
          
          <span className="mt-2 font-semibold text-gaza-dark">Gaza Family</span>
        </div>
      </div>
      
      {lastDonationAmount > 0 && (
        <div className="text-center mt-4">
          <p className="text-gaza-primary font-medium">
            ${lastDonationAmount} provides shelter & essentials to families in need
          </p>
        </div>
      )}
    </div>
  );
};

export default DonationVisualization;
