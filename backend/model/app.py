from http.server import executable
from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np
import pandas as pd

app = Flask(__name__, template_folder='templates')

model=pickle.load(open('xgb.pkl','rb'))


@app.route('/')
def hello_world():
    return render_template("Risk_prediction.html")


@app.route('/predict',methods=['POST','GET'])
def predict():
    int_features=[int(x) for x in request.form.values()]
    final=[np.array(int_features)]
    print(list(request.form.values()))
    print(int_features)
    print(np.array(final))
    prediction=model.predict_proba(np.array(final))
    output='{0:.{1}f}'.format(prediction[0][1], 2)

    if output>str(0.5):
        return render_template('Risk_prediction.html',pred='You have a high risk pregnancy.\nProbable risk is {}'.format(output),bhai="Take care!")
    else:
        return render_template('Risk_prediction.html',pred='Your pregnancy is safe.\n Probable risk is {}'.format(output),bhai="You are safe!")


if __name__ == '__main__':
    app.run(debug=True)