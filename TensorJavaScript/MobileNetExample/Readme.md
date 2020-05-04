#  Image Classification Model in your Browser
Understanding Machine Learning in the Browser

# Installation:
Download index.html and index.js
Open your index.html file in a browser like Google Chrome or navigate to the folder in cmd and run
```
python3 -m http.server
```
Then go to your browser and open the following address:
```
http://localhost:8000/
```


Further documentations is available [here](https://www.npmjs.com/package/ml5).

## Notes
1.In the above example, we used a pre-trained image classification model called MobileNet

2.We used ml5.js, a library built on top of TensorFlow.js, to load the MobileNet model into our browser and perform inference on the video feed

3.We also leveraged the P5.js library to process the video feed and display labels on the video itself

