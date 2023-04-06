from flask import Flask
from flask import *
from flask_cors import CORS, cross_origin
from google.cloud import vision
from google.cloud.vision_v1 import types
import os
import io


app = Flask(__name__)
CORS(app)

client = vision.ImageAnnotatorClient()


def resvisionapi(imgname):
    os.chdir('./images')
    imgpath = os.path.join(os.getcwd(), imgname)
    with io.open(imgpath, 'rb') as imgfile:
        content = imgfile.read()

    image = types.Image(content=content)

    response = client.label_detection(image=image)
    labels = response.label_annotations
    print('Labels:')
    # for label in labels:
    #     print(label.description + " = " + str(int(label.score*100)) + "%")
    print(labels)
    return labels


@app.route('/upload', methods=['POST'])
@cross_origin()
def upload():
    imgdata = request.files['image']
    imgname = request.form['filename']
    print('파일명 : '+imgname+'수신완료')
    imgdata.save(os.path.join('.\images', imgname))
    print('이미지 저장완료')

    resvisionapi(imgname)

    return imgname


if __name__ == '__main__':
    app.run(debug=True)


# server connect TEST CODE
# @app.route('/members', methods=['GET'])
# @cross_origin()
# def members():
#     return {"members": ["mem1", "mem2", "mem3"]}
