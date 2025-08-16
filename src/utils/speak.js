export const speak = (text, emotion = "neutral", lang = "en-IN") => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  const femaleVoicesByLang = {
    "en-IN": "Google UK English Female",
    "hi-IN": "Google हिन्दी",
    "mr-IN": "Google मराठी",
    "ta-IN": "Google தமிழ்",
    "gu-IN": "Google ગુજરાતી",
    "bn-IN": "Google বাংলা"
  };

  const voices = synth.getVoices();
  const selectedVoice = voices.find(
    (voice) => voice.name === femaleVoicesByLang[lang]
  );

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  const settings = {
    neutral: { pitch: 1.05, rate: 0.97 },
    cheerful: { pitch: 1.3, rate: 1.05 },
    calming: { pitch: 1.1, rate: 0.85 },
    serious: { pitch: 0.9, rate: 0.95 },
  }[emotion] || {};

  utterance.pitch = settings.pitch || 1;
  utterance.rate = settings.rate || 1;
  utterance.volume = 1;
  utterance.lang = lang;

  synth.cancel();
  synth.speak(utterance);
};
