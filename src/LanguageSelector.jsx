import React from "react";

export default function LanguageSelector({language, setLanguage}) {
    const languages = ["Hindi", "English", "French", "Spanish", "Japanese", "German" ]
    return(
        <div className="w-full h-50 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400">
            { languages.map((lang, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="language"
                  value={lang}
                  checked={language === lang}
                  onChange={(e) => setLanguage(e.target.value)}
                />
                <span>{lang}</span>
              </label> 
            )) }
            
          </div>
    )
}