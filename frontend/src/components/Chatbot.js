import React, { useEffect, useState } from 'react';
import Axios from "axios";
import {useNavigate} from "react-router-dom";

function Chatbot() {

    Axios.defaults.withCredentials = true;
    let navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [responseText, setResponseText] = useState("");

    const sendMessage = () => {
        Axios.post("http://localhost:5000/bot", {
            message: message
        }).then((response) => {
            console.log(response);
        });

        Axios({
            method:"GET",
            url:`http://localhost:5000/bot`
          }).then((res)=>{
            setResponseText(res.data);
          }).catch((err)=>{
            console.log(err);
          })
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
            <div class="section no-pad-bot" id="index-banner">
                <div class="container">
                    <h1 class="header center orange-text">ChatBot</h1>
                    <div class="row center">
                        <h5 class="header col s12 light">Enter Input to Talk to the Bot

                        </h5>
                    </div>

                    <div class="row">
                        <form action='/bot' method="post" class="col s12">
                            <div class="row">
                                <div class="input-field col s4">
                                    <label for="first_name"><b>Say Something</b></label>

                                    <input onChange={e => setMessage(e.target.value)} placeholder="Hello" name="Your Messege" id="first_name" type="text" class="validate" />
                                </div>
                            </div>

                            <div class="row center">

                                <button type="submit" onClick={sendMessage} class="btn-large waves-effect waves-light orange">Get Response</button>

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