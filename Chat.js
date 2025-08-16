import React, { useState, useRef, useEffect } from "react";
import "./index.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [reminders, setReminders] = useState(
    JSON.parse(localStorage.getItem("vedaReminders")) || []
  );
  const [userName, setUserName] = useState("");
  const chatEndRef = useRef(null);

  const data = {
    motivation: [
      "Stay strong, you’re doing amazing!",
      "Believe in yourself!",
      "You can do it!"
    ],
    jokes: [
      "Why don’t skeletons fight each other? They don’t have the guts.",
      "Why did the computer go to therapy? Too many bytes of sadness."
    ],
    facts: [
      "The heart of a shrimp is located in its head.",
      "Honey never spoils. Archaeologists have found 3000-year-old honey!"
    ]
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Particle background
  useEffect(() => {
    const canvas = document.getElementById("particles");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray = [];
    const colors = ["#00f0ff", "#0ff0a0", "#ffffff"];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 120; i++) {
      particlesArray.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  const speak = text => {
    const synth = window.speechSynthesis;
    let voices = synth.getVoices();
    if (voices.length === 0) {
      setTimeout(() => speak(text), 100);
      return;
    }
    const femaleVoice =
      voices.find(
        v =>
          v.name.toLowerCase().includes("female") ||
          v.name.toLowerCase().includes("woman")
      ) || voices[0];
    const utter = new SpeechSynthesisUtterance(text);
    utter.voice = femaleVoice;
    utter.lang = femaleVoice?.lang || "en-US";
    synth.speak(utter);
  };

  const addMessage = (sender, text) => {
    setMessages(prev => [...prev, { sender, text }]);
  };

  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.toLowerCase();
    addMessage("user", input);
    setInput("");

    setTimeout(() => {
      let reply = "";

      // Core responses
      if (userMessage.includes("motivate")) {
        reply = getRandom(data.motivation);
      } else if (userMessage.includes("joke")) {
        reply = getRandom(data.jokes);
      } else if (userMessage.includes("fact")) {
        reply = getRandom(data.facts);
      } else if (userMessage.startsWith("my name is")) {
        const name = input.replace(/my name is/i, "").trim();
        setUserName(name);
        reply = `Oh! That's a very nice name. Hi ${name}! How can I help you today?`;
      } else if (userMessage.startsWith("remind me to")) {
        const reminder = input.replace(/remind me to/i, "").trim();
        const newReminders = [...reminders, reminder];
        setReminders(newReminders);
        localStorage.setItem("vedaReminders", JSON.stringify(newReminders));
        reply = `Reminder saved: ${reminder}`;
      } else if (userMessage.includes("my reminders")) {
        reply =
          reminders.length === 0
            ? "You have no reminders."
            : `Your reminders: ${reminders.join(", ")}`;
      } else if (userMessage.includes("time")) {
        reply = `Current time: ${new Date().toLocaleTimeString()}`;
      } else if (userMessage.includes("date") || userMessage.includes("today")) {
        reply = `Today's date: ${new Date().toLocaleDateString()}`;
      } else if (userMessage.includes("yesterday")) {
        const date = new Date();
        date.setDate(date.getDate() - 1);
        reply = `Yesterday's date: ${date.toLocaleDateString()}`;
      } else if (userMessage.includes("tomorrow")) {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        reply = `Tomorrow's date: ${date.toLocaleDateString()}`;
      } else if (userMessage.includes("what is your name")) {
        reply = "My name is Veda AI. What about you?";
      } else if (userMessage.includes("what's up")) {
        reply = "I'm fine. What about you?";
      } else if (userMessage.includes("i am doing great")) {
        reply = `Glad to hear that ${userName || ""}`;
      } else if (userMessage.includes("what can you do")) {
        reply =
          "I can motivate you, tell jokes, share facts, provide date/time info, save reminders, and open websites like Chrome or YouTube for you.";
      }
      // Open websites
      else if (userMessage.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank");
        reply = "Opening YouTube for you!";
      } else if (userMessage.includes("open google")) {
        window.open("https://www.google.com", "_blank");
        reply = "Opening Google for you!";
      } else if (userMessage.includes("open facebook")) {
        window.open("https://www.facebook.com", "_blank");
        reply = "Opening Facebook for you!";
      } else if (userMessage.includes("open instagram")) {
        window.open("https://www.instagram.com", "_blank");
        reply = "Opening Instagram for you!";
      } else if (userMessage.includes("open twitter")) {
        window.open("https://www.twitter.com", "_blank");
        reply = "Opening Twitter for you!";
      } else if (userMessage.includes("open github")) {
        window.open("https://www.github.com", "_blank");
        reply = "Opening GitHub for you!";
      } else if (userMessage.includes("open stackoverflow")) {
        window.open("https://www.stackoverflow.com", "_blank");
      } else if (userMessage.includes("open reddit")) {
        window.open("https://www.reddit.com", "_blank");
        reply = "Opening Reddit for you!";
      } else if (userMessage.includes("open linkedin")) {
        window.open("https://www.linkedin.com", "_blank");
        reply = "Opening LinkedIn for you!";
      } else if (userMessage.includes("open tiktok")) {
        window.open("https://www.tiktok.com", "_blank");
        reply = "Opening TikTok for you!";
      } else if (userMessage.includes("open whatsapp")) {
        window.open("https://www.whatsapp.com", "_blank");
        reply = "Opening WhatsApp for you!";
      } else if (userMessage.includes("open discord")) {
        window.open("https://www.discord.com", "_blank");
        reply = "Opening Discord for you!";
      } else if (userMessage.includes("open spotify")) {
        window.open("https://www.spotify.com", "_blank");
        reply = "Opening Spotify for you!";
      } else if (userMessage.includes("open netflix")) {
        window.open("https://www.netflix.com", "_blank");
        reply = "Opening Netflix for you!";
      } else if (userMessage.includes("open amazon")) {
        window.open("https://www.amazon.com", "_blank");
        reply = "Opening Amazon for you!";
      } else {
        reply = "I'm learning to respond better!";
      }

      addMessage("veda", reply);
      speak(reply);
    }, 500);
  };

  return (
    <>
      <canvas id="particles"></canvas>
      <div className="chat-container">
        <div className="chat-header">Veda AI</div>
        <div className="chat-box">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        <div className="input-area">
          <input
            autoFocus
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </>
  );
}
