import React, { useEffect, useState } from 'react';
import Axios from "axios";
import {useNavigate} from "react-router-dom";

function Model() {
    return (
        <div>
            <div class="section no-pad-bot" id="index-banner">
                <div class="container">

                    <h1 class="header center orange-text">Pregnancy Risk Prediction</h1>
                    <div class="row center">
                        <h5 class="header col s12 light">Predict the probability of a risky Pregnancy.

                        </h5>
                    </div>

                    <div class="row">
                        <form action='/predict' method="post" class="col s12">
                            <div class="row">
                                <div class="input-field col s4">
                                    <label for="first_name"><b>Age</b></label>

                                    <input placeholder="Age in years" name="Age" id="first_name" type="text" class="validate" />
                                </div>
                                <div class="input-field col s4">
                                    <label for="last_name"><b>Systolic BP</b></label>

                                    <input id="last_name" name="SystolicBP" placeholder="Systolic BP" type="text" class="validate" />
                                </div>
                                <div class="input-field col s4">
                                    <label for="_name"><b>Diastolic BP</b></label>

                                    <input id="_name" name="DiastolicBP" placeholder="Diastolic BP" type="text" class="validate" />
                                </div>
                                <div class="input-field col s4">
                                    <label for="_name"><b>Blood Sugar</b></label>

                                    <input id="_name" name="BS" placeholder="Blood Sugar Level" type="text" class="validate" />
                                </div>
                                <div class="input-field col s4">
                                    <label for="_name"><b>Body Temperature</b></label>

                                    <input id="_name" name="BodyTemp" placeholder="Body Temperature" type="text" class="validate" />
                                </div>
                                <div class="input-field col s4">
                                    <label for="_name"><b>Heart Rate</b></label>

                                    <input id="_name" name="HeartRate" placeholder="Heart Rate" type="text" class="validate" />
                                </div>
                            </div>

                            <div class="row center">

                                <button type="submit" class="btn-large waves-effect waves-light orange">Predict Probability</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Model