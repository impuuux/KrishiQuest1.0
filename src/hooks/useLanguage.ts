import { useState, useEffect } from 'react';
import { translations, Translation } from '../i18n/translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    return localStorage.getItem('language') || 'hi'; // Default to Hindi for Indian farmers
  });

  const [currentTranslation, setCurrentTranslation] = useState<Translation>(
    translations[currentLanguage]
  );

  useEffect(() => {
    setCurrentTranslation(translations[currentLanguage]);
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (languageCode: string) => {
    if (translations[languageCode]) {
      setCurrentLanguage(languageCode);
    }
  };

  return {
    currentLanguage,
    currentTranslation,
    changeLanguage,
    availableLanguages: Object.keys(translations)
  };
};