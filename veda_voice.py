from gtts import gTTS
from deep_translator import GoogleTranslator
import shutil
import pygame
import os


PUBLIC_FOLDER = "C:/Users/komal/WebstormProjects/untitled/veda-frontend/public"


BASE_DIR = os.path.dirname(__file__)
PUBLIC_PATH = os.path.join(BASE_DIR, "public")
TRIGGER_FILE = os.path.join(PUBLIC_PATH, "trigger.txt")

if not os.path.exists(PUBLIC_PATH):
    os.makedirs(PUBLIC_PATH)


if os.path.exists(TRIGGER_FILE):
    with open(TRIGGER_FILE, 'r', encoding="utf-8") as f:
        content = f.read()
        print("File content:", content)


LANG_CODES = {
    "english": "en",
    "hindi": "hi",
    "marathi": "mr",
    "tamil": "ta",
    "telugu": "te",
    "bengali": "bn",
    "gujarati": "gu",
    "punjabi": "pa",
    "kannada": "kn",
    "malayalam": "ml"
}

current_language = "en"

def set_language(name):
    global current_language
    if name.lower() in LANG_CODES:
        current_language = LANG_CODES[name.lower()]
        print(f"Switched language to: {name} ({current_language})")
    else:
        print("Unsupported language. Defaulting to English.")
        current_language = "en"

def speak(text):
    try:
        translated = GoogleTranslator(source='auto', target=current_language).translate(text)
        tts = gTTS(text=translated, lang=current_language)
        tts.save("voice.mp3")

       
        with open(TRIGGER_FILE, "w", encoding="utf-8") as f:
            f.write("1")

        
        subtitle_path = os.path.join(BASE_DIR, "subtitle.txt")
        with open(subtitle_path, "w", encoding="utf-8") as f:
            f.write(translated)

       
        pygame.mixer.init()
        pygame.mixer.music.load("voice.mp3")
        pygame.mixer.music.play()
        while pygame.mixer.music.get_busy():
            pygame.time.Clock().tick(10)

        pygame.mixer.quit()  

        
        shutil.copy("voice.mp3", os.path.join(PUBLIC_FOLDER, "voice.mp3"))
        shutil.copy(subtitle_path, os.path.join(PUBLIC_FOLDER, "subtitle.txt"))

        print("Voice and subtitle saved to frontend.")

    except Exception as e:
        print("Error:", e)
