import React from 'react'
import Header from './Header'
import LanguageSelector from './LanguageSelector';
import TranslatedData from './TranslatedData';
import LoadingState from './LoadingState';
import LanguageSelector2 from './LanguageSelector2';

function App() {
  const [chatStyle, setChatStyle] = React.useState(true)
  const [language, setLanguage] = React.useState("Hindi")
  const [message, setMessage] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [translated, setTranslated] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [chat, setChat] = React.useState([
    { type: "bot", text: "Select the language you want me to translate into, type your text and hit send!" },
  ])

  // console.log(language)
  // console.log(message)
  // console.log(chat)
  {/* for scroll the last msg into view */}
  const lastMessageRef = React.useRef(null);
  React.useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat]);


  const handleTranslate = async ()=> {
    setLoading(true)
    const userMessage = { type: "user", text: message };
    setChat((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("https://sea-turtle-app-4fxtt.ondigitalocean.app/api/chat", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(({message, language}))
      })
      const data = await res.json()
      // console.log(data)
      setResponse(data.reply)
      setTranslated(true)
      setLoading(false)
      const botResponse = { type: "bot", text: data.reply };
      setChat((prev) => [...prev, botResponse]);
      setMessage("");

    } catch (error) {
      console.error("ERROR:", error)
    }
  }

  function handleStartover(){
    setLanguage("Hindi")
    setMessage("")
    setResponse("")
    setTranslated(false)
    setLoading(false)
  }
 


  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      
      <div className="p-6 bg-[#f9f9fc] shadow-[0px_0px_10px_rgba(0,0,0,0.1)]">
      {
        chatStyle ?
      
        <div className="min-h-[75vh] max-h-[75vh] flex flex-col bg-white p-5 rounded-lg shadow-md border-[5px] border-solid border-black-500 overflow-y-auto">
          <div className="flex-1 overflow-y-auto space-y-2 p-1">
            {chat.map((msg, index) => {
              const isLast = index === chat.length - 1;
              return(
                <div key={index} ref={isLast ? lastMessageRef : null} >
                  {
                    loading && isLast ? 
                    <>
                    
                      <div className="chat chat-end">
                      <div className="chat-bubble chat-bubble-success">{ msg.text}</div>
                      </div>
                      <span className="loading loading-dots loading-md text-blue-400 "></span> 
                    </>
                    :
                    msg.type ===  "user"?

                    <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">{ msg.text}</div>
                    </div>
                    :
                    
                    <div className="chat chat-start">
                      <div className="chat-bubble chat-bubble-info">{ msg.text}</div>
                    </div>

                  }


                  {/* <div
                      key={index}
                      ref={isLast ? lastMessageRef : null}
                      className={`p-2 rounded-md text-white ${
                        msg.type === "user" ?
                        <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
                        </div>
                        : 
                        
                        "bg-blue-950 rounded-tl-none "
                      }`}
                    >
                      {msg.text}
                  </div> */}

                </div>
              )}
            )}
          </div>

          <div className="flex  items-center space-x-2">
            <input
              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              placeholder="Type..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleTranslate();
                }
              }}
            />
            <button
              onClick={handleTranslate}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"

            >
              ➤
            </button>
          </div>  


          <div >
            <LanguageSelector2 language={language} setLanguage={setLanguage} />
          </div>








        </div>

        :
        
        <div className=" bg-white p-5 rounded-lg shadow-md border-[5px] border-solid border-black-500">
          {/* Text input label */}
          <h2 className="text-center font-semibold text-blue-700 text-lg mb-2">
           { translated? "Original Text" :"Text to Translate"} <span>👇</span>
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
            { translated? "Your Translation" :"Select Language"} <span>👇</span>
          </h3>

          {/* Language options */}
          <div>
            {loading ? <LoadingState /> : translated ? <TranslatedData response = {response} /> : <LanguageSelector language={language} setLanguage={setLanguage} />}
            {/* <LanguageSelector language={language} setLanguage={setLanguage} />
            <TranslatedData /> */}
          </div>

          {/* Translate button */}
          <button className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md font-semibold transition duration-200"
            onClick={translated ? handleStartover : handleTranslate }
          >
           { translated ? "Start Over" : " Translate"}
          </button>
        </div>
      }   
      </div>





    </div>
  )
}

export default App
