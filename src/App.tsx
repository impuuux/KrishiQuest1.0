import React from 'react'
import { useLanguage } from './hooks/useLanguage'
import { LanguageSelector } from './components/LanguageSelector'

function App() {
  const { currentLanguage, currentTranslation, changeLanguage, availableLanguages } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <LanguageSelector 
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
        availableLanguages={availableLanguages}
      />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {currentTranslation.title}
        </h1>
        <p className="text-lg text-gray-600">
          {currentTranslation.subtitle}
        </p>
      </div>
    </div>
  )
}

export default App