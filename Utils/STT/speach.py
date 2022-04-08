import speech_recognition as sr

r = sr.Recognizer()

with sr.AudioFile('int.mp3') as source:
    audio = r.record(source)


    try: 

        text=r.recognize_google(audio)
        print("Doing things")
        print(text)
    except:
        print("Fucky wucky")
