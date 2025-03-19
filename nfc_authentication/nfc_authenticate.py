import requests
import time

# URL of the local server where the NFC authentication API is running
SERVER_URL = "http://127.0.0.1:8000/api/users/authenticate/"

# Function to authenticate NFC UID
def authenticate(uid):
    payload = {"uid": uid}
    response = requests.post(SERVER_URL, json=payload)
    
    if response.status_code == 200:
        return "Authentication Successful!"
    else:
        return "Access Denied!"

# Dummy function to simulate reading from NFC reader
# Replace this with actual NFC reading logic
def read_nfc():
    # Simulate reading an NFC UID (replace this with real NFC reader code)
    # In reality, you would read from your NFC reader hardware.
    return [4, 211, 41, 122]  # Example UID

# Main loop: Continuously read NFC and authenticate
while True:
    print("Waiting for NFC card...")
    uid = read_nfc()  # Replace with actual NFC reading logic
    print(f"Read UID: {uid}")
    
    if authenticate(uid) == "Authentication Successful!":
        print("Authentication Successful!")
        break  # Exit the loop after successful authentication
    
    time.sleep(2)  # Delay for a couple of seconds before checking again
