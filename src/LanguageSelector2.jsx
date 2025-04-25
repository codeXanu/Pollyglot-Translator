import React from "react";


export default function LanguageSelector2({language, setLanguage}) {
    const languages = [
        { code: "Hindi", flag: "Hindi" },
        { code: "English", flag: "🇪🇸" },
        { code: "Japanese", flag: "🇯🇵" },
      ];

    return(
        <div className="flex justify-center space-x-4 mt-2" >
            {languages.map((lang) => (
                <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-3xl ${language === lang.code ? "scale-110 bg-amber-200 " : "opacity-70 bg-amber-800"}`}
                >
                {lang.flag}
                </button>
            ))}
        </div>
    )
}