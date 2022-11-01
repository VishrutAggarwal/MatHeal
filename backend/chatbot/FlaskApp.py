from http.server import executable
from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np
import pandas as pd
import Bot
import os

AppDirectory = os.path.dirname(os.path.realpath(__file__))
app = Flask(__name__, template_folder=AppDirectory)

MyBot = Bot.Bot()

@app.route('/')
def hello_world():
    #print("Hello")
    return render_template("SampleSite.html")


@app.route('/bot',methods=['POST','GET'])
def bot():
    message = request.form['Your Messege']
    print(message)

    Messege = MyBot.run(message)
    return render_template('SampleSite.html', responseText=Messege,bhai="Take care!")


if __name__ == '__main__':
    app.run(debug=False)