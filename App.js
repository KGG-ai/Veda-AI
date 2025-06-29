import React, { useState } from "react";
import "./App.css";

function App() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [language, setLanguage] = useState("hi-IN"); // default Hindi

  // All messages in various languages
  const allLanguages = {
    "en-US": "Hello! I am Veda AI, your voice assistant.",
    "hi-IN": "नमस्ते! मैं वेदा एआई हूँ, आपकी आवाज सहायक।",
    "ta-IN": "வணக்கம்! நான் வேதா ஏஐ, உங்கள் உதவியாளர்.",
    "te-IN": "హలో! నేను వేదా AI, మీ సహాయకురాలు.",
    "bn-IN": "হ্যালো! আমি ভেদা এআই, আপনার সহকারী।",
    "mr-IN": "नमस्कार! मी वेदा एआय, तुमची सहायिका आहे.",
    "gu-IN": "નમસ્તે! હું વેદા એઆઇ છું, તમારી સહાયક.",
    "kn-IN": "ನಮಸ್ಕಾರ! ನಾನು ವೇದ ಎಐ, ನಿಮ್ಮ ಸಹಾಯಕ.",
    "ml-IN": "നമസ്കാരം! ഞാൻ വേദ എഐ, നിങ്ങളുടെ സഹായിയാണ്.",
    "ur-IN": "ہیلو! میں ویدا اے آئی ہوں، آپ کی معاون۔",
    "fr-FR": "Bonjour! Je suis Veda AI, votre assistante vocale.",
    "es-ES": "¡Hola! Soy Veda AI, tu asistente de voz.",
    "de-DE": "Hallo! Ich bin Veda AI, deine Sprachassistentin.",
    "ar-SA": "مرحبًا! أنا فيدا، مساعدتك الصوتية.",
    "ru-RU": "Привет! Я Веда AI, ваш голосовой помощник.",
    "zh-CN": "你好！我是Veda AI，你的语音助手。",
    "ja-JP": "こんにちは！私はVeda AIです。",
    "ko-KR": "안녕하세요! 저는 Veda AI입니다.",
    "pt-BR": "Olá! Eu sou a Veda AI, sua assistente de voz.",
    "id-ID": "Halo! Saya Veda AI, asisten suara Anda.",
    "tr-TR": "Merhaba! Ben Veda AI, sesli asistanınız.",
    "it-IT": "Ciao! Sono Veda AI, la tua assistente vocale.",
    "nl-NL": "Hallo! Ik ben Veda AI, je spraakassistent.",
    "th-TH": "สวัสดี! ฉันคือ Veda AI ผู้ช่วยเสียงของคุณ",
    "vi-VN": "Xin chào! Tôi là Veda AI, trợ lý giọng nói của bạn."

  };

  const handleTalkClick = () => {
    const text = allLanguages[language] || allLanguages["en-US"];
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setSubtitle(text);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setTimeout(() => setSubtitle(""), 3000);
    };

    window.speechSynthesis.speak(utterance);
  };
  return (
    <div className="container">
      <h1>Welcome, I am Veda AI 🧕</h1>

      {/* 🟨 Move the language selector above the image */}
      <div className="lang-wrapper">
        <label htmlFor="language">Select Language :  bab</label>
        <select
          id="language"
          className="language-selector"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {Object.keys(allLanguages).map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
        </select>
      </div>

      <img
        src="/long.png"
        alt="Veda AI"
        className={`avatar ${isSpeaking ? "talking" : ""}`}
      />

      <p className="subtitle">{subtitle}</p>

      <button className="veda-button" onClick={handleTalkClick}>
        🔊 Talk to Veda
      </button>
    </div>

);
}

export default App;





