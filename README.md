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

-> Frontend UI:
![Fontend UI](https://github.com/user-attachments/assets/73655096-f22d-4ea0-a772-062dbc154a6f)


 ## Planned Upgrades

Claude/OpenAI integration 

Online Wikipedia search

Online weather reports

AI-based summary or translation

Web scraping or automation

## How to Run Locally

```bash

# 1. Start Backend (Python)
cd backend
python main.py

# 2. Start Frontend (React)
cd veda-frontend
npm install
npm start

```
# Troubleshooting & Error Guide

### 1. File NOT FOUND: public/trigger.txt
 - Cause: Missing wake-word trigger file.
 - Fix: Create public/trigger.txt manually

### 2. image not uploading 
 - Cause: File format mismatch
 - Fix: Ensure image is .png and matches src

### 3. Language Error 
 - Cause: Missing native font support
 - Fix: Used deep_translator for fixes
### 4. Speech Wake Word
 - Cause: Missing trigger.txt or incorrect path
 - Fix: Validate file placement and content
 
### Author 
Komal Rajput 
- Final-year BCA student
- Passionate about real-world voice AI, automation, and building full-stack projects.
- Currently building projects to showcase & enhance skills before internship/job.

 “Building Veda AI to bring a desi Jarvis to life. Let’s make tech speak your language.”
 
### Connect
 
- Email: [komalr635122@gmail.com]

- GitHub: [github.com/KGG-ai]

- WhatsApp: Available on request




