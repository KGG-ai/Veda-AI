import os
from veda_voice import speak

def run_system_command(command):
    command = command.lower()

    if "open chrome" in command:
        os.system("start chrome")  
        speak("Opening Chrome")
    elif "open notepad" in command:
        os.system("start notepad")
        speak("Opening Notepad")
    elif "play music" in command:
        os.system("start wmplayer")  
        speak("Playing music")
    elif "youtube" in command:
        os.open("https://youtube.com")
        speak("Opening YouTube")
    elif "google" in command:
        os.open("https://google.com")
        speak("Opening Google")
    else:
        speak("Sorry, I can't run that command yet.")
