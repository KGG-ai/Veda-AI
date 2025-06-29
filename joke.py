import random
from veda_voice import speak

def tell_joke():
    jokes = [
        "Main robot hoon, par meri bhi feelings hoti hai",
        "Why don’t robots panic? Because they have nerves of steel!",
        "मैं इतनी खूबसूरत हूँ, मिरर भी blush करता है।",
        "My circuits are made in India. Totally spicy and reliable!"
    ]
    speak(random.choice(jokes))
