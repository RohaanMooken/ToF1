import face_recognition
import os
import requests
# Function to load images from the /auth folder


def load_auth_images(auth_folder):
    auth_images = []

    for filename in os.listdir(auth_folder):
        if filename.endswith(".jpg"):
            image_path = os.path.join(auth_folder, filename)
            auth_images.append(face_recognition.load_image_file(image_path))

    return auth_images


def recognize_auth_faces(auth_images):
    auth_encodings = []

    for image in auth_images:
        encoding = face_recognition.face_encodings(image)
        if encoding:
            auth_encodings.append(encoding[0])

    return auth_encodings

#SuperModels
auth_folder = "./goodpics/facial_recognition/dataset/Daniel/"
auth_images = load_auth_images(auth_folder)
auth_encodings = recognize_auth_faces(auth_images)

#CrappyModels
folder = "./facial_recognition/dataset/Daniel/"
images = load_auth_images(folder)
encodings = recognize_auth_faces(images)

for encoding in encodings:
    matches = face_recognition.compare_faces(auth_encodings, encoding)
    name = "X"
    if True in matches:
        print("Good to go")
        requests.post("https://x.stolav.net/api/classified", json=True)
    else:
        print("Too short")

files = os.listdir(folder)
for file in files:
    file_path = os.path.join(folder, file)
    print(file_path)
    os.remove(file_path)
