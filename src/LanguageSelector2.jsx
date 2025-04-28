import React from "react";


export default function LanguageSelector2({language, setLanguage}) {
    const languages = [
        { code: "Hindi", flag: "Hindi" },
        { code: "English", flag: "English" },
        { code: "Japanese", flag: "Japanese" },
      ];

    return(
        <div className="flex justify-center space-x-4 mt-2" >
            {languages.map((lang) => (
                <div key={lang.code} className={` ${language === lang.code ? " bg-green-300 rounded-md  " : null }`} >

                    <button  onClick={() => setLanguage(lang.code)} className="btn btn-outline btn-success text-black p-2">{lang.flag} </button>
                </div>
               
            ))}
        </div>
    )
}