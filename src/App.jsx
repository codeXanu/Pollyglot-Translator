import React from 'react'
import Header from './Header'

function App() {
  const [language, setLanguage] = React.useState("Hindi")
  const languages = ["Hindi","French", "Spanish", "Japanese", "German" ]
  const [message, setMessage] = React.useState("");

  console.log(language)
  console.log(message)


  return (
    <div className="max-w-3xl mx-auto">
      <Header />

      <div className="p-6 bg-[#f9f9fc] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
        <div className=" bg-white p-5 rounded-lg shadow-md border-[5px] border-solid border-black-500">
          {/* Text input label */}
          <h2 className="text-center font-semibold text-blue-700 text-lg mb-2">
            Text to translate <span>👇</span>
          </h2>

          {/* Textarea */}
          <textarea
            className="w-full h-50 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="How are you?"
            value={ message }
            onChange={(e)=> setMessage(e.target.value)}
          />

          {/* Language selector label */}
          <h3 className="text-center font-semibold text-blue-700 text-lg mt-5 mb-2">
            Select language <span>👇</span>
          </h3>

          {/* Language options */}
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

          {/* Translate button */}
          <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md font-semibold transition duration-200">
            Translate
          </button>
        </div>
      </div>





    </div>
  )
}

export default App
