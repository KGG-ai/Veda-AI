import { useEffect, useState } from "react";

function useAudioLevel() {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    let audioContext;
    let analyser;
    let mic;

    const init = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        analyser.fftSize = 256;

        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        const tick = () => {
          analyser.getByteFrequencyData(dataArray);
          const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
          setVolume(average);
          requestAnimationFrame(tick);
        };

        tick();
        mic = stream;
      } catch (e) {
        console.error("Microphone access error:", e);
      }
    };

    init();

    return () => {
      if (mic) mic.getTracks().forEach(track => track.stop());
      if (audioContext) audioContext.close();
    };
  }, []);

  return volume;
}

export default useAudioLevel;
