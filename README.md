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
 Cause: Missing wake-word trigger file.
 Fix: Created new folder public and in that created a new file trigger.txt 
 public/trigger.txt

### 2. image not uploading 
 Cause: Due to .jpg format but src use .png format
 Fix: Created the image in .png format.

### 3. Language Error 
 Cause: Because of different languages i was not able to write them in their native format
 Fix: With the help of translator I fixed them.

### 4. Speech Wake Word
 Cause: Because of missing of trigger.txt file
 Fix: Created and moved to the right folder

### AUTHOR 
Komal Rajput 
  Currently building real world projects to showcase and enhance my skills.
  

