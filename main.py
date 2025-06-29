from liste import listen
from language_switcher import detect_language_command
from joke import tell_joke
from veda_voice import speak
from commands import run_system_command
from reminders import save_reminder, read_reminders
from veda_trigger import wait_for_wake_word  
import os


base_dir = os.path.dirname(os.path.abspath(__file__))
print("📁 Script directory:", base_dir)


file_path = os.path.join(base_dir, "public", "trigger.txt")
print("📄 Checking path:", file_path)

if not os.path.exists(file_path):
    print("❌ File NOT FOUND!")
else:
    print("✅ File FOUND!") 
    trigger_path = os.path.join(os.path.dirname(__file__), 'public', 'trigger.txt')
    with open(trigger_path, 'r') as f:
        content = f.read()
        print("📑 File content:", content)



def start_assistant():
    speak("Namaste! I'm Veda AI, your voice assistant. How can I help you?")
    while True:
        command = listen()


        if command.strip() == "":
            speak("Sorry, I didn’t catch that. Try again.")
            continue
        elif detect_language_command(command):
            continue
        elif "joke" in command:
            tell_joke()
        elif "remind me" in command:
            reminder = command.replace("remind me", "").strip()
            save_reminder(reminder)
        elif "reminders" in command:
            read_reminders()
        elif "open" in command or "play" in command:
            run_system_command(command)
        else:
            speak("Sorry, I’m still learning that. Try another command.")



if __name__ == "__main__":
    wait_for_wake_word(start_assistant)
