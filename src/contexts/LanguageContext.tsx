
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ur' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // English translations
    'home': 'Home',
    'news': 'News',
    'team': 'Team',
    'donate': 'Donate',
    'donateNow': 'Donate Now',
    'supportGaza': 'Support Gaza',
    'humanitarianAid': 'Humanitarian Aid',
    'latestUpdates': 'Latest Updates',
    'yourDonationInAction': 'Your Donation In Action',
    'donor': 'Donor',
    'gazaFamily': 'Gaza Family',
    'providesEssentials': 'provides shelter & essentials to families in need',
    'donationHelps': 'Your support provides essential aid to those affected by the crisis.',
    'everyDonation': 'Every donation makes a meaningful difference in someone\'s life.',
    'makeADonation': 'Make a Donation',
    'selectAmount': 'Select Amount',
    'otherAmount': 'Other amount',
    'name': 'Name',
    'email': 'Email',
    'yourName': 'Your Name',
    'yourEmail': 'Your Email',
    'oneTimeDonation': 'One-time Donation',
    'monthlyDonation': 'Monthly Donation',
    'selectMonthlyAmount': 'Select Monthly Amount',
    'monthly': 'Monthly',
    'thankYouDonation': 'Thank you for your donation!',
    'donationHelp': 'Your donation of ${{amount}} will help provide essential aid to families in Gaza.',
  },
  ur: {
    // Urdu translations
    'home': 'گھر',
    'news': 'خبریں',
    'team': 'ٹیم',
    'donate': 'عطیہ کریں',
    'donateNow': 'ابھی عطیہ کریں',
    'supportGaza': 'غزہ کی حمایت کریں',
    'humanitarianAid': 'انسانی امداد',
    'latestUpdates': 'تازہ ترین اپڈیٹس',
    'yourDonationInAction': 'آپ کا عطیہ عمل میں',
    'donor': 'عطیہ دہندہ',
    'gazaFamily': 'غزہ کا خاندان',
    'providesEssentials': 'ضرورت مند خاندانوں کو پناہ اور ضروری اشیاء فراہم کرتا ہے',
    'donationHelps': 'آپ کی مدد بحران سے متاثرہ افراد کو ضروری امداد فراہم کرتی ہے۔',
    'everyDonation': 'ہر عطیہ کسی کی زندگی میں معنی خیز فرق پیدا کرتا ہے۔',
    'makeADonation': 'عطیہ کریں',
    'selectAmount': 'رقم منتخب کریں',
    'otherAmount': 'دیگر رقم',
    'name': 'نام',
    'email': 'ای میل',
    'yourName': 'آپ کا نام',
    'yourEmail': 'آپ کا ای میل',
    'oneTimeDonation': 'ایک بار کا عطیہ',
    'monthlyDonation': 'ماہانہ عطیہ',
    'selectMonthlyAmount': 'ماہانہ رقم منتخب کریں',
    'monthly': 'ماہانہ',
    'thankYouDonation': 'آپ کے عطیے کا شکریہ!',
    'donationHelp': 'آپ کا ${{amount}} کا عطیہ غزہ کے خاندانوں کو ضروری امداد فراہم کرنے میں مدد کرے گا۔',
  },
  ar: {
    // Arabic translations
    'home': 'الرئيسية',
    'news': 'الأخبار',
    'team': 'الفريق',
    'donate': 'تبرع',
    'donateNow': 'تبرع الآن',
    'supportGaza': 'دعم غزة',
    'humanitarianAid': 'المساعدات الإنسانية',
    'latestUpdates': 'آخر التحديثات',
    'yourDonationInAction': 'تبرعك قيد التنفيذ',
    'donor': 'المتبرع',
    'gazaFamily': 'عائلة غزة',
    'providesEssentials': 'يوفر المأوى والضروريات للعائلات المحتاجة',
    'donationHelps': 'دعمك يوفر المساعدات الأساسية للمتضررين من الأزمة.',
    'everyDonation': 'كل تبرع يحدث فرقًا ذا معنى في حياة شخص ما.',
    'makeADonation': 'قم بالتبرع',
    'selectAmount': 'اختر المبلغ',
    'otherAmount': 'مبلغ آخر',
    'name': 'الاسم',
    'email': 'البريد الإلكتروني',
    'yourName': 'اسمك',
    'yourEmail': 'بريدك الإلكتروني',
    'oneTimeDonation': 'تبرع لمرة واحدة',
    'monthlyDonation': 'تبرع شهري',
    'selectMonthlyAmount': 'اختر المبلغ الشهري',
    'monthly': 'شهريًا',
    'thankYouDonation': 'شكرًا لتبرعك!',
    'donationHelp': 'تبرعك بمبلغ ${{amount}} سيساعد في توفير المساعدات الأساسية للعائلات في غزة.',
  }
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (!translations[language][key]) {
      console.warn(`Translation missing for key: ${key} in language: ${language}`);
      return key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
