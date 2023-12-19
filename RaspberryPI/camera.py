import RPi.GPIO as GPIO
import time
import subprocess
import os

# Define the GPIO pin connected to the button
button_pin = 3

i = 0

def send_pngs():
	command = "tar -cf - ./facial_recognition/dataset/Daniel/ | netcat -N 172.232.159.28 6900 && rm -r ./facial_recognition/dataset/Daniel/i*"
	
	try:
		subprocess.run(command, shell=True, check=True)
		print("Command executed successfully")
	except subprocess.CalledProcessError as e:
		print(f"Error executing the command: {e}")

# Define the function to be executed when the button is pressed
def button_pressed_callback(channel):
    pic = take_picture()
    print(f"Pic was taken :D {pic}")
    send_pngs()

# Set up GPIO mode and configure the button pin
GPIO.setmode(GPIO.BCM)
GPIO.setup(button_pin, GPIO.IN, pull_up_down=GPIO.PUD_UP)

# Add event detection for the button press
GPIO.add_event_detect(button_pin, GPIO.FALLING, callback=button_pressed_callback, bouncetime=100)

def take_picture():
    global i
    i += 1
    output_file = f"./facial_recognition/dataset/Daniel/image{i}.jpg"
    subprocess.run(["fswebcam", "--no-banner", "-r", "1280x720", "--jpeg", "85", "-D", "1", output_file])
    return output_file

try:
    print("Waiting for button press...")
    while True:
        time.sleep(1)

except KeyboardInterrupt:
    print("Program terminated by user.")
finally:
    # Clean up GPIO on program exit
    GPIO.cleanup()
