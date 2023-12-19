import Adafruit_DHT
import time
import requests

sensor = Adafruit_DHT.DHT11
pin = 2
url = "https://x.stolav.net/api/data"
data = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

try:
	while True:
		humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
		
		if humidity is not None and temperature is not None:
			print(f"Temperature: {temperature:.1f}C\tHumidity: {humidity:.1f}%")
			data[0].pop(0)
			data[1].pop(0)
			data[0].append(temperature)
			data[1].append(humidity)
		else:
			print("Failed to retrieve data from the sensor. Check the connection and try again.")
		
		try:
			res = requests.request(method="POST", url=url, json=data)
			time.sleep(60 * 5)
		except requests.exceptions.RequestException as e:
			print(e)

except KeyboardInterrupt:
	print("Program terminated by user")
