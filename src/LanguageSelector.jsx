import React from "react";

export default function LanguageSelector({language, setLanguage}) {
    const languages = ["Hindi", "English", "French", "Spanish", "Japanese", "German" ]
    return(
        <div className="h-32 overflow-y-auto space-y-2 ml-2">
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