import { useState, useRef, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; 
import { FaArrowRight, FaStop, FaMicrophone, FaVolumeUp } from "react-icons/fa"; 

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [displayedAnswer, setDisplayedAnswer] = useState(""); 
  const [typingInterval, setTypingInterval] = useState(null); 
  const chatBoxRef = useRef(null); 

  const speechSynthesisRef = useRef(window.speechSynthesis);
  const recognitionRef = useRef(null);
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    const loadVoices = () => {
      const voices = speechSynthesisRef.current.getVoices();
      const femaleVoice = voices.find(voice => voice.name.includes("Female") || voice.gender === "female");
      setVoice(femaleVoice || voices[0]); 
    };

    loadVoices();

    speechSynthesisRef.current.onvoiceschanged = loadVoices;
  }, []);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();

    setDisplayedAnswer(""); 
    setMessage(""); 

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const fullAnswer = response.data.candidates[0].content.parts[0].text;

      let index = 0;

      if (typingInterval) {
        clearInterval(typingInterval);
      }

      const interval = setInterval(() => {
        setDisplayedAnswer((prev) => prev + fullAnswer[index]);
        index += 1;
        if (index >= fullAnswer.length) {
          clearInterval(interval);
          setAnswer(fullAnswer); 
          setGeneratingAnswer(false);
          speakText(fullAnswer);
        }
      }, 10); 

      setTypingInterval(interval); 

    } catch (error) {
      console.log(error);
      setDisplayedAnswer(""); 
      setAnswer("Sorry - Something went wrong. Please try again!");
      setGeneratingAnswer(false);
    }
  }

  function stopTyping() {
    if (typingInterval) {
      clearInterval(typingInterval);
      setTypingInterval(null);
      setGeneratingAnswer(false); 
    }
  }

  function speakText(text) {
    if (speechSynthesisRef.current && voice) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.lang = "en-US";
      speechSynthesisRef.current.speak(utterance);
    }
  }

  function stopSpeech() {
    if (speechSynthesisRef.current) {
      speechSynthesisRef.current.cancel(); 
    }
  }

  function startSpeechRecognition() {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition API is not supported in this browser.");
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setQuestion(speechToText);
    };

    recognition.start();
  }

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [displayedAnswer]);

  return (
    <>
      <div className="w-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 h-screen p-5 flex flex-col justify-center items-center">
        <form
          onSubmit={generateAnswer}
          className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-center rounded-lg shadow-2xl bg-white py-8 px-6 transition-all duration-500 transform hover:scale-105"
        >
          <a
            href="https://github.com/Vishesh-Pandey/chat-ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 md:mb-6 animate-bounce drop-shadow-lg">
              Disaster AI
            </h1>
          </a>
          <textarea
            required
            className="border border-gray-300 rounded-xl w-full my-4 p-4 text-lg transition-all duration-300 focus:border-pink-600 focus:ring-2 focus:ring-pink-500 placeholder-pink-500 bg-pink-50 resize-none"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="How can I help you? I am Disaster AI"
            rows="4"
          ></textarea>
          <div className="flex justify-center gap-4 mb-4">
            <button
              type="submit"
              className={`bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center ${
                generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={generatingAnswer}
            >
              {generatingAnswer && (
                <AiOutlineLoading3Quarters className="animate-spin mr-2" />
              )}
              <FaArrowRight className="ml-2" />
            </button>
            {generatingAnswer && (
              <button
                type="button"
                onClick={stopTyping}
                className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
              >
                <FaStop className="mr-2" />
                Stop
              </button>
            )}
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <button
              type="button"
              onClick={startSpeechRecognition}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
            >
              <FaMicrophone className="mr-2" />
              Speak
            </button>
            <button
              type="button"
              onClick={() => speakText(displayedAnswer)}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              <FaVolumeUp className="mr-2" />
              Read Aloud
            </button>
            <button
              type="button"
              onClick={stopSpeech}
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 flex items-center justify-center"
            >
              <FaStop className="mr-2" />
              Stop Reading
            </button>
          </div>
          {message && (
            <div className="text-red-500 mt-4 text-sm font-medium">
              {message}
            </div>
          )}
        </form>
        <div
          className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 text-left rounded-xl bg-white mt-6 shadow-2xl transition-all duration-500 transform hover:scale-105 p-6 relative max-h-80 overflow-y-auto"
          ref={chatBoxRef}
          style={{
            position: 'relative',
            padding: '1.5rem',
            backgroundColor: '#fff',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '-1rem',
              width: 0,
              height: 0,
              borderTop: '1rem solid transparent',
              borderBottom: '1rem solid transparent',
              borderRight: '1rem solid #fff', // Match this color with your chatbox background
              transform: 'translateY(-50%)',
            }}
          ></div>
          <div className="relative z-10 p-6 text-lg text-gray-700 break-words">
            <ReactMarkdown>{displayedAnswer}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;

