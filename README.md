# Veda AI – Your Desi Voice Assistant 🇮🇳

> A powerful **offline multilingual voice assistant** that listens for your voice, responds with a beautiful female voice, tells jokes, opens apps, and saves reminders — built in Python.




---

## Features

- Wake word detection (like Alexa/Google) – responds only to **"Veda"**
- Beautiful female voice with `pyttsx3`
- Multilingual support via language switcher
- Reminder saving + reading
- Tells jokes to cheer you up
- Runs system commands like opening Chrome, Notepad, etc.
- Fully modular & customizable design

---

## Tech Stack

| Layer        | Technology                 |
|--------------|-----------------------------|
| Wake Word    | `pvporcupine`, `pyaudio`    |
| Voice Input  | `speech_recognition`        |
| Voice Output | `pyttsx3`                   |
| Logic        | Python                      |
| UI           | React (planned)             |

---

## Project Structure

```bash
veda-ai/
│
├── main.py              # Main program file
├── veda_trigger.py      # Wake word logic using Porcupine
├── veda_voice.py        # Female voice responses
├── commands.py          # Runs system commands
├── reminders.py         # Save + read reminders
├── joke.py              # Jokes module
├── liste.py             # Listens via microphone
├── language_switcher.py # Detect Hindi/English etc.
├── trigger.txt          # File to enable/disable listening
├── veda_response.mp3    # Voice assets
├── index.html           # Placeholder UI (future)
└── public/              # Trigger/control files
```

## SCREENSHOT 
-> Terminal Mockup:
![Terminal Screenshot](https://github.com/user-attachments/assets/ed4f87b1-2bb0-4ae8-8e28-404e0349d05a)



## Future Upgrades
 React-based Desktop UI

 Veda app for mobile

 Custom voice pack selector

 GPT-style intelligent fallback

 Hindi voice recognition
