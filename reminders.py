import json
import os
from veda_voice import speak

REMINDER_FILE = "reminders.json"

def save_reminder(reminder):
    if not os.path.exists(REMINDER_FILE):
        with open(REMINDER_FILE, "w") as f:
            json.dump([], f)

    with open(REMINDER_FILE, "r") as f:
        data = json.load(f)

    data.append(reminder)

    with open(REMINDER_FILE, "w") as f:
        json.dump(data, f)

    speak("Reminder saved successfully.")

def read_reminders():
    if not os.path.exists(REMINDER_FILE):
        speak("You have no reminders yet.")
        return

    with open(REMINDER_FILE, "r") as f:
        data = json.load(f)

    if data:
        speak("Here are your reminders:")
        for r in data:
            speak(r)
    else:
        speak("You have no reminders yet.")
