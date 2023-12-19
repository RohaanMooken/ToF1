import subprocess

def main():
	command = "netcat -l -p 6900 | tar x && python3 ai.py"

	while True:
		try:
			subprocess.run(command, shell=True, check=True)
			print("Command executed successfully.")
		except subprocess.CalledProcessError as e:
			print(f"Error executing the command: {e}")

if __name__ == "__main__":
    main()
