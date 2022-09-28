import React, { useState } from 'react'

function RiskForm() {

    const [age, setAge] = useState('');
    const [sysbp, setSysBP] = useState('');
    const [dysbp, setDysBP] = useState('');
    const [sugarlvl, setSugarLvl] = useState('');
    const [heartrate, setHeartRate] = useState('');
    const [bodytemp, setBodyTemp] = useState('');

    let patientRiskSurvey = {
        Age: age,
        SystolicBP: sysbp,
        DystolicBP: dysbp,
        SugarLevel: sugarlvl,
        HeartRate: heartrate,
        BodyTemp: bodytemp
    }

  return (
    <div>
        <label className="form-label gx-5" id='headingteammem' for="form3Example1q">Enter Details of Patient</label>
        <div className="row rowforflname" >

            <div className="col-md-6 mb-4">

                <div className="form-outline">
                    <label className="form-label" for="age"> Age:</label>
                    <input type="text" id="age" className="form-control page form-control-lg" required onChange={e => setAge(e.target.value)} />

                </div>

            </div>

            <div className="col-md-6 mb-4">

                <div className="form-outline">
                    <label className="form-label" for="sysbp">Systolic Blood Pressure: </label>
                    <input type="text" className="form-control page form-control-lg" id="sysbp" onChange={e => setSysBP(e.target.value)} required />

                </div>

            </div>

        </div>

        <div className="form-outline mb-4">
            <label className="form-label" for="dysbp">Dystolic Blood Pressure: </label>
            <input type="text" id="dysbp" onChange={e => setDysBP(e.target.value)} required className="form-control page form-control-lg" />


        </div>
        <div className="form-outline mb-4">
            <label className="form-label" for="sugarlvl">Blood Sugar Level: </label>
            <input type="text" id="sugarlvl" onChange={e => setSugarLvl(e.target.value)} required className="form-control page form-control-lg" />


        </div>


        <div className="form-outline mb-4">
            <label className="form-label" for="heartrate">Heart Pulse Rate:</label>
            <input type="text" id="heartrate" onChange={e => setHeartRate(e.target.value)} required className="form-control page" />
        </div>

{/* 
        <div className="row rowfordegbran" >
            <div className="col-md-6 mb-4"> */}

                <div className="form-outline">
                    <label className="form-label" for="bodytemp">Body Temperature:</label>
                    <input type="text" id="bodytemp" onChange={e => setBodyTemp(e.target.value)} required className="form-control page form-control-lg" />

                </div>

            {/* </div>
        </div> */}

        <input type="submit" className="btn btn-success page btn-lg mb-1" value='Calculate Risk'></input>

    </div>
  )
}

export default RiskForm