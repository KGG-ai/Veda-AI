import React, { useEffect, useState } from "react";
import VedaAss from "../components/VedaAss";
import { speak } from "../utils/speak";

export default function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lang, setLang] = useState("en-IN");

  const emotionSettings = {
    neutral: { pitch: 1.0, rate: 1.0 },
    cheerful: { pitch: 1.35, rate: 1.05 },
    serious: { pitch: 0.9, rate: 0.95 },
    excited: { pitch: 1.45, rate: 1.25 },
    calming: { pitch: 1.1, rate: 0.85 },
    sad: { pitch: 0.85, rate: 0.9 }
  };

  const speakWithEmotion = (text, emotion = "neutral") => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);

    const preferredVoices = [
      "Google UK English Female",
      "Microsoft Zira Desktop",
      "Google en-IN",
      "Google Hindi",
      "Google Marathi",
      "Google Tamil"
    ];

    const voices = synth.getVoices();
    const selectedVoice = voices.find((voice) =>
      preferredVoices.includes(voice.name)
    );

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    const settings = emotionSettings[emotion] || emotionSettings.neutral;
    utterance.pitch = settings.pitch;
    utterance.rate = settings.rate;
    utterance.volume = 1;
    utterance.lang = lang;

    synth.cancel();
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    synth.speak(utterance);
  };

  const rememberTask = (task) => {
    localStorage.setItem("veda-last-task", task);
    speakWithEmotion(`Noted. We'll continue your ${task} next time.`, "neutral");
  };

  const welcomeText = {
    "en-IN": "Hi Komal... I'm Veda, your assistant. Ready to glow and grow today?",
    "hi-IN": "नमस्ते कोमल... मैं वेदा हूँ। आज क्या मदद कर सकती हूँ?",
    "mr-IN": "नमस्कार कोमल... मी वेदा आहे. आज मी तुम्हाला कशामध्ये मदत करू?",
    "ta-IN": "வணக்கம் கோமல்... நான் வேதா. இன்று உங்களுக்கு என்ன உதவி தேவை?",
    "gu-IN": "નમસ્તે કોમલ... હું વેદા છું. આજે હું શું મદદ કરી શકું?",
    "bn-IN": "হ্যালো কোমল... আমি ভেদা। কীভাবে সাহায্য করতে পারি?"
  };

  useEffect(() => {
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    const lastTask = localStorage.getItem("veda-last-task");
    if (lastTask) {
      speakWithEmotion(
        `Hi Komal, last time we worked on your ${lastTask}. Shall we continue?`,
        "calming"
      );
    }
  }, []);

  useEffect(() => {
    speak(welcomeText[lang], "cheerful", lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center font-sans px-4">
      {/* 🔠 Language selector */}
      <select
        className="mb-4 bg-gray-900 text-white px-3 py-2 rounded border border-gray-600"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="en-IN">English</option>
        <option value="hi-IN">Hindi</option>
        <option value="mr-IN">Marathi</option>
        <option value="ta-IN">Tamil</option>
        <option value="gu-IN">Gujarati</option>
        <option value="bn-IN">Bengali</option>
      </select>

      {/* 📝 Typewriter heading */}
      <h1 className="text-2xl md:text-3xl font-light text-green-400 mb-8 veda-typewriter">
        What Can I Do for You Today?
      </h1>

      {/* 🟢 Interactive Voice Orb */}
      <div
        className={`w-44 h-44 md:w-56 md:h-56 rounded-full bg-green-500 glow ${
          isSpeaking ? "pulse" : ""
        } cursor-pointer`}
        onClick={() => speakWithEmotion(welcomeText[lang], "cheerful")}
      />

      {/* 🔘 Action Buttons */}
      <div className="flex gap-4 flex-wrap justify-center mt-6">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          onClick={() => {
            rememberTask("contact search");
            speakWithEmotion("I'm opening your contact search...", "calming");
          }}
        >
          Search Contacts
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          onClick={() => {
            rememberTask("resume");
            speakWithEmotion("Let’s generate your resume with elegance.", "serious");
          }}
        >
          Generate Resume
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          onClick={() => {
            rememberTask("DSA prep");
            speakWithEmotion("Let’s conquer DSA... One problem at a time!", "excited");
          }}
        >
          DSA Help
        </button>
      </div>

      <p className="mt-6 text-xs text-gray-500 italic">Click the orb ✨ or buttons to talk to Veda</p>
    </div>
  );
}
