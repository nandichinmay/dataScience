#  ML in the Browser
Creating Ml Model in browser using Tensorflow.js. It comes with pre-trained model by Google.
There are two approaches of doing it:
1. CORE API: low-level of tensor operations
2. LAYER API: defining the model as done in keras

It can build both machine learning and deep learning models in the browser. GPU is a plus for model training.

You can explore some deep learning models trained using TensorFlow.js in [this repository](https://github.com/tensorflow/tfjs-examples)

Tensorflow provides lots of pre trained models from Google. You can take a look at:
```https://www.tensorflow.org/js/models```

Today I will be using PoseNet model. This model detects human figures (body-joints location estimation) in an image or video.


## Example Usage:
### CORE API:
Download index_ex_1.html and rename it to index.html.

Open your index.html file in a browser like Google Chrome or navigate to the folder in cmd and run
```
python3 -m http.server
```
Then go to your browser and open the following address:
```
http://localhost:8000/
```
Check Console of the browser for output

### LAYER API (building our own simple model):
Download index_ex_2.html and rename it to index.html. Download basic_regression.js.

Open your index.html file in a browser like Google Chrome or navigate to the folder in cmd and run
```
python3 -m http.server
```
Then go to your browser and open the following address:
```
http://localhost:8000/
```
Check Console of the browser for output

### LAYER API (using pre trained model):
Download index.html and Download load_posenet.js.

Open your index.html file in a browser like Google Chrome or navigate to the folder in cmd and run
```
python3 -m http.server
```
Then go to your browser and open the following address:
```
http://localhost:8000/
```
Check Console of the browser for output

Further documentations is available [here](https://github.com/tensorflow/tfjs-models/tree/master/posenet).

## Notes
1. Browser and web language makes it easy to deploy.
2. It is easy for all users and developers as Javascript is supported by major browsers
3. Training and running in the browser helps keeping privacy intact.
4. Makes it easy to integrate the run time
