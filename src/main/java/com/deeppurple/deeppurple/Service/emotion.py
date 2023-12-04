import paralleldots as pd
import sys
import json


def analyze_emotion(text):
    emotion = pd.emotion(text)
    return emotion


if __name__ == "__main__":
    try:
        pd.set_api_key(pd.get_api_key())
        response = analyze_emotion(sys.argv[1])
        print(response)
        try:
            print(json.loads(response))
        except json.JSONDecodeError:
            print("Error: Invalid JSON response")
    except Exception as e:
        print(e)
