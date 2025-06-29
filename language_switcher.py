from veda_voice import LANG_CODES,set_language, speak

def detect_language_command(command):
    words = command.lower().split()
    for word in words:
        if word in LANG_CODES:
            set_language(word)
            return True
    return False
