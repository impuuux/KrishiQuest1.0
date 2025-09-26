export interface Translation {
  title: string;
  subtitle: string;
}

export const translations: Record<string, Translation> = {
  // Hindi
  hi: {
    title: "कृषि वेब ऐप प्लेटफॉर्म",
    subtitle: "आपके खेती प्रबंधन प्रणाली में आपका स्वागत है"
  },
  // English
  en: {
    title: "Agricultural Web App Platform",
    subtitle: "Welcome to your farming management system"
  },
  // Bengali
  bn: {
    title: "কৃষি ওয়েব অ্যাপ প্ল্যাটফর্ম",
    subtitle: "আপনার কৃষি ব্যবস্থাপনা সিস্টেমে স্বাগতম"
  },
  // Telugu
  te: {
    title: "వ్యవసాయ వెబ్ యాప్ ప్లాట్‌ఫారమ్",
    subtitle: "మీ వ్యవసాయ నిర్వహణ వ్యవస్థకు స్వాగతం"
  },
  // Marathi
  mr: {
    title: "कृषी वेब अॅप प्लॅटफॉर्म",
    subtitle: "आपल्या शेती व्यवस्थापन प्रणालीमध्ये आपले स्वागत आहे"
  },
  // Tamil
  ta: {
    title: "விவசாய வலை பயன்பாட்டு தளம்",
    subtitle: "உங்கள் விவசாய மேலாண்மை அமைப்புக்கு வரவேற்கிறோம்"
  },
  // Gujarati
  gu: {
    title: "કૃષિ વેબ એપ્લિકેશન પ્લેટફોર્મ",
    subtitle: "તમારી ખેતી વ્યવસ્થાપન પ્રણાલીમાં આપનું સ્વાગત છે"
  },
  // Punjabi
  pa: {
    title: "ਖੇਤੀਬਾੜੀ ਵੈੱਬ ਐਪ ਪਲੇਟਫਾਰਮ",
    subtitle: "ਤੁਹਾਡੇ ਖੇਤੀ ਪ੍ਰਬੰਧਨ ਸਿਸਟਮ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ"
  }
};

export const languageNames: Record<string, string> = {
  hi: "हिंदी",
  en: "English", 
  bn: "বাংলা",
  te: "తెలుగు",
  mr: "मराठी",
  ta: "தமிழ்",
  gu: "ગુજરાતી",
  pa: "ਪੰਜਾਬੀ"
};