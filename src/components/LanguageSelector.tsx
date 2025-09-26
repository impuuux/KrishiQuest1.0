import React from 'react';
import { Globe } from 'lucide-react';
import { languageNames } from '../i18n/translations';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (languageCode: string) => void;
  availableLanguages: string[];
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
  availableLanguages
}) => {
  return (
    <div className="absolute top-4 right-4">
      <div className="relative inline-block">
        <select
          value={currentLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent cursor-pointer"
        >
          {availableLanguages.map((langCode) => (
            <option key={langCode} value={langCode}>
              {languageNames[langCode]}
            </option>
          ))}
        </select>
        <Globe className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
};