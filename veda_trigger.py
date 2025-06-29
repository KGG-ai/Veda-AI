import pvporcupine
import pyaudio
import struct
import os

def wait_for_wake_word(callback):
    
    access_key = "kBXdDKIAZO01JpSKd4PmlMZylH8iuqmIU+uuJ5to4TayNQKfviNdwA=="


    porcupine = pvporcupine.create(
      access_key=access_key,
      keywords=["jarvis"]  
    )

    pa = pyaudio.PyAudio()
    stream = pa.open(format=pyaudio.paInt16,
                     channels=1,
                     rate=porcupine.sample_rate,
                     input=True,
                     frames_per_buffer=porcupine.frame_length)

    print("🎤 Veda is listening for her name...")

    try:
        while True:
            pcm = stream.read(porcupine.frame_length, exception_on_overflow=False)
            pcm = struct.unpack_from("h" * porcupine.frame_length, pcm)

            keyword_index = porcupine.process(pcm)
            if keyword_index >= 0:
                print("💡 Wake word detected: Veda")
                callback()
    except KeyboardInterrupt:
        print("Veda stopped.")
    finally:
        stream.stop_stream()
        stream.close()
        pa.terminate()
        porcupine.delete()

