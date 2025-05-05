
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const useRTL = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Arabic and Urdu are RTL languages
    const isRTL = language === 'ar' || language === 'ur';
    
    // Set the direction attribute on the html element
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    
    // Add or remove the RTL class on the body
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
    
    return () => {
      // Cleanup
      document.documentElement.removeAttribute('dir');
      document.body.classList.remove('rtl');
    };
  }, [language]);
};
