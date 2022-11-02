import React, { useEffect, useState } from 'react';
import Axios from "axios";
import {useNavigate} from "react-router-dom";

function Chatbot() {

    Axios.defaults.withCredentials = true;
    let navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [responseText, setResponseText] = useState("");

    const sendMessage = () => {
        Axios.post("http://localhost:5000/", {
            message: message
        }).then((response) => {
            setResponseText(response.data);
        });

        // Axios({
        //     method:"GET",
        //     url:`http://localhost:5000/bot`
        //   }).then((res)=>{
        //     setResponseText(res.data);
        //   }).catch((err)=>{
        //     console.log(err);
        //   })
    }

    // const getResponse = () => {
    //     Axios.get("http://localhost:5000/bot", {
    //         setResponseText: responseText
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // }

    return (
        <div>
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center orange-text">ChatBot</h1>
                    <div className="row center">
                        <h5 className="header col s12 light">Enter Input to Talk to the Bot

                        </h5>
                    </div>

                    <div className="row">
                        <form action='/bot' method="post" className="col s12">
                            <div className="row">
                                <div className="input-field col s4">
                                    <label htmlFor="first_name"><b>Say Something</b></label>

                                    <input onChange={e => setMessage(e.target.value)} placeholder="Hello" name="Your Messege" id="first_name" type="text" className="validate" />
                                </div>
                            </div>

                            <div className="row center">

                                <button type="submit" onClick={sendMessage} className="btn-large waves-effect waves-light orange">Get Response</button>

                                <p>{responseText}</p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Chatbot