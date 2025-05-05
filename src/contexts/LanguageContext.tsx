
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
    'readMore': 'Read More',
    'viewAllUpdates': 'View All Updates',
    'learnMore': 'Learn More',
    'aidDelivery': 'Aid Delivery',
    'healthcare': 'Healthcare',
    'infrastructure': 'Infrastructure',
    'ourTeam': 'Our Team',
    'executiveDirector': 'Executive Director',
    'fieldOperationsManager': 'Field Operations Manager',
    'medicalDirector': 'Medical Director',
    'logisticsCoordinator': 'Logistics Coordinator',
    'gazaAidInitiative': 'Gaza Aid Initiative',
    'stayInformed': 'Stay informed about our ongoing aid efforts and the situation in Gaza through our regular updates.',
    'meetTheTeam': 'Meet the dedicated professionals working tirelessly to provide humanitarian assistance in Gaza.',
    'aidShipment': 'Aid Shipment Reaches Rafah Crossing',
    'medicalCenter': 'New Medical Center Opens in Khan Younis',
    'cleanWater': 'Clean Water Initiative Expanded',
    'aidShipmentDesc': '200 tons of food and medical supplies successfully delivered to southern Gaza through Rafah crossing.',
    'medicalCenterDesc': 'A field hospital with advanced surgical capabilities now operational in southern Gaza.',
    'cleanWaterDesc': 'Our water purification program now reaches 15,000 more residents in northern Gaza communities.',
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
    'readMore': 'مزید پڑھیں',
    'viewAllUpdates': 'تمام اپڈیٹس دیکھیں',
    'learnMore': 'مزید جانیں',
    'aidDelivery': 'امدادی سامان کی ترسیل',
    'healthcare': 'صحت کی دیکھ بھال',
    'infrastructure': 'بنیادی ڈھانچہ',
    'ourTeam': 'ہماری ٹیم',
    'executiveDirector': 'ایگزیکٹو ڈائریکٹر',
    'fieldOperationsManager': 'فیلڈ آپریشنز مینیجر',
    'medicalDirector': 'میڈیکل ڈائریکٹر',
    'logisticsCoordinator': 'لاجسٹکس کوآرڈینیٹر',
    'gazaAidInitiative': 'غزہ امدادی مہم',
    'stayInformed': 'ہماری جاری امدادی کوششوں اور غزہ میں صورتحال کے بارے میں باخبر رہیں۔',
    'meetTheTeam': 'غزہ میں انسانی امداد فراہم کرنے کے لیے جفاکشی سے کام کرنے والے پیشہ ور افراد سے ملیں۔',
    'aidShipment': 'امدادی سامان رفح کراسنگ پہنچ گیا',
    'medicalCenter': 'خان یونس میں نیا میڈیکل سینٹر کھل گیا',
    'cleanWater': 'صاف پانی کی مہم وسیع کر دی گئی',
    'aidShipmentDesc': 'رفح کراسنگ کے ذریعے جنوبی غزہ میں 200 ٹن کھانا اور طبی سامان کامیابی سے پہنچا دیا گیا۔',
    'medicalCenterDesc': 'جنوبی غزہ میں جدید سرجیکل صلاحیتوں کے ساتھ ایک فیلڈ ہسپتال اب کام کر رہا ہے۔',
    'cleanWaterDesc': 'ہمارا پانی کی صفائی کا پروگرام اب شمالی غزہ کے علاقوں میں 15,000 مزید رہائشیوں تک پہنچتا ہے۔',
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
    'readMore': 'اقرأ المزيد',
    'viewAllUpdates': 'عرض كل التحديثات',
    'learnMore': 'تعرف على المزيد',
    'aidDelivery': 'تسليم المساعدات',
    'healthcare': 'الرعاية الصحية',
    'infrastructure': 'البنية التحتية',
    'ourTeam': 'فريقنا',
    'executiveDirector': 'المدير التنفيذي',
    'fieldOperationsManager': 'مدير العمليات الميدانية',
    'medicalDirector': 'المدير الطبي',
    'logisticsCoordinator': 'منسق اللوجستيات',
    'gazaAidInitiative': 'مبادرة مساعدة غزة',
    'stayInformed': 'ابق على اطلاع حول جهود المساعدة المستمرة والوضع في غزة من خلال تحديثاتنا المنتظمة.',
    'meetTheTeam': 'تعرف على المتخصصين المتفانين الذين يعملون بلا كلل لتقديم المساعدات الإنسانية في غزة.',
    'aidShipment': 'وصول شحنة المساعدات إلى معبر رفح',
    'medicalCenter': 'افتتاح مركز طبي جديد في خان يونس',
    'cleanWater': 'توسيع مبادرة المياه النظيفة',
    'aidShipmentDesc': 'تم تسليم 200 طن من الغذاء والإمدادات الطبية بنجاح إلى جنوب غزة عبر معبر رفح.',
    'medicalCenterDesc': 'مستشفى ميداني بقدرات جراحية متقدمة يعمل الآن في جنوب غزة.',
    'cleanWaterDesc': 'يصل برنامج تنقية المياه الآن إلى 15,000 مقيم إضافي في مجتمعات شمال غزة.',
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
