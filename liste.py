import speech_recognition as sr

def listen():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.adjust_for_ambient_noise(source, duration=1)  
        audio = r.listen(source, phrase_time_limit=5)

    try:
        query = r.recognize_google(audio)
        print("You said:", query)
        return query.lower()
    except sr.UnknownValueError:
        return ""

