import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from "axios";
import {useNavigate} from "react-router-dom";

function Authentication() {

    let navigate = useNavigate();


    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [blood, setBlood] = useState('');
    const [profile, setProfile] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [certificate, setCertificate] = useState('');
    const [certificateID, setCertificateID] = useState('');

    const [emergencyContactNo, setEmergencyContactNo] = useState(1);
    const [emergencyContact, setEmergencyContact] = useState(Array(4).fill(''));
    const setStates = (i, v) => {
        setState(Object.assign([...state], { [i]: v }))
    }

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const registerPatient = () => {
        Axios.post("http://localhost:3001/patientregister", {
            name: name,
            password: password,
            number: number,
            email: email,
            dob: dob,
            blood: blood,
            profile: profile,
            address: address,
            city: city,
            state: state,
            emergencyContact: emergencyContact,

        }).then((response) => {
            console.log(response);
        });
    };

    const loginPatient = () => {
        Axios.post("http://localhost:3001/patientlogin", {
            name: name,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/patientlogin").then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].name);
            }
        });
    }, []);

    let patientRegister = {
        Names: name,
        DOB: dob,
        Blood: blood,
        Profile: profile,
        Email: email,
        Number: number,
        Address: address,
        City: city,
        State: state,
        EmergencyContact: emergencyContact,
        EmergencyContactNo: emergencyContactNo,
        Password: password
    }

    let patientLogin = {
        Email: email,
        Password: password
    }

    const registerPersonnel = () => {
        Axios.post("http://localhost:3001/personnelregister", {
            name: name,
            password: password,
            number: number,
            email: email,
            profile: profile,
            city: city,
            state: state,
            certificate: certificate,
            certificateID: certificateID,

        }).then((response) => {
            console.log(response);
        });
    };

    const loginPersonnel = () => {
        Axios.post("http://localhost:3001/personnellogin", {
            name: name,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/personnellogin").then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].name);
            }
        });
    }, []);

    let personnelRegister = {
        Names: name,
        Profile: profile,
        Email: email,
        Number: number,
        City: city,
        State: state,
        Certificate: certificate,
        CertificateID: certificateID,
        Password: password
    }

    let personnelLogin = {
        Email: email,
        Password: password
    }

    const registerSupplier = () => {
        Axios.post("http://localhost:3001/supplierregister", {
            name: name,
            password: password,
            number: number,
            email: email,
            city: city,
            state: state,
            address: address,
            certificate: certificate,
            certificateID: certificateID,

        }).then((response) => {
            console.log(response);
        });
    };

    const loginSupplier = () => {
        Axios.post("http://localhost:3001/supplierlogin", {
            email: email,
            password: password,
        }).then((response) => {
            if(response.status==200){
                const id = response.data.id;
                navigate(`/supplierdash/${id}`);
              }
            else if (response.data.message) {
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username);
            }
        });
    };

    useEffect(() => {
        Axios.get("http://localhost:3001/supplierlogin").then((response) => {
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].name);
            }
        });
    }, []);

    let supplierRegister = {
        Names: name,
        Email: email,
        Number: number,
        Address: address,
        City: city,
        State: state,
        Certificate: certificate,
        CertificateID: certificateID,
        Password: password
    }

    let supplierLogin = {
        Email: email,
        Password: password
    }

    const emergencyContacts = () => {
        const row = [];
        for (let i = 0; i < emergencyContactNo; i++) {
            row.push(
                <fieldset>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="emergencycontact">Emergency Contact {i + 1}: </label>
                        <input type="text" id="email" onChange={e => setEmergencyContact(i, e.target.value)} required className="form-control page form-control-lg" />

                    </div>
                </fieldset >
            )
        }
        return row;
    };

    const Increment = () => {
        if (emergencyContactNo < 4) {
            setEmergencyContactNo(emergencyContactNo + 1);
        }
    }

    const Decrement = () => {
        if (emergencyContactNo > 1) {
            setEmergencyContactNo(emergencyContactNo - 1);
        }
    }


    return (
        <Container className='min-vh-100' id="authentication">
            <Row>
                <Col>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Patient</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Register</Accordion.Header>
                                        <Accordion.Body>

                                            <label className="form-label gx-5" id='headingteammem' for="form3Example1q">Enter Details of Patient</label>
                                            <div className="row rowforflname" >

                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="name"> Name:</label>
                                                        <input type="text" id="lastName" className="form-control page form-control-lg" required onChange={e => setName(e.target.value)} />

                                                    </div>

                                                </div>

                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="mobile">Mobile Number: </label>
                                                        <input type="text" className="form-control page form-control-lg" id="mobile" onChange={e => setNumber(e.target.value)} required />

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="email">Email: </label>
                                                <input type="text" id="email" onChange={e => setEmail(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="pass">Password: </label>
                                                <input type="text" id="pass" onChange={e => setPassword(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>


                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="dob">Date of Birth:</label>
                                                <input type="text" id="dob" onChange={e => setDOB(e.target.value)} required className="form-control page" />
                                            </div>


                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="blood">Blood Group:</label>
                                                        <input type="text" id="blood" onChange={e => setBlood(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="profile">Profile:</label>
                                                        <input type="text" id="blood" onChange={e => setProfile(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="address">Address:</label>
                                                        <input type="text" id="address" onChange={e => setAddress(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="city">City:</label>
                                                        <input type="text" id="city" onChange={e => setCity(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="state">State:</label>
                                                        <input type="text" id="state" onChange={e => setState(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <label className="form-label gx-5" for="form3Example1q">Choose number of emergency contacts: </label>
                                            <input type='text' id='num-of-contacts' name="num-of-contacts" placeholder={emergencyContactNo} disabled="disabled" required></input>
                                            <button className='page' id="icbutton" onClick={Increment}>+</button>
                                            <button className='page' id="dcbutton" onClick={Decrement}>-</button>

                                            {emergencyContacts()}

                                            <input type="submit" onClick={registerPatient} className="btn btn-success page btn-lg mb-1" value='Register'></input>


                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Log In</Accordion.Header>
                                        <Accordion.Body>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="email">Email: </label>
                                                <input type="text" id="email" onChange={e => setEmail(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="pass">Password: </label>
                                                <input type="text" id="pass" onChange={e => setPassword(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>

                                            <input type="submit" onClick={loginPatient} className="btn btn-success page btn-lg mb-1" value='Login'></input>


                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Personnel</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Register</Accordion.Header>
                                        <Accordion.Body>
                                        <label className="form-label gx-5" id='headingteammem' for="form3Example1q">Enter Details of Personnl</label>
                                            <div className="row rowforflname" >

                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="name"> Name:</label>
                                                        <input type="text" id="lastName" className="form-control page form-control-lg" required onChange={e => setName(e.target.value)} />

                                                    </div>

                                                </div>

                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="mobile">Mobile Number: </label>
                                                        <input type="text" className="form-control page form-control-lg" id="mobile" onChange={e => setNumber(e.target.value)} required />

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="email">Email: </label>
                                                <input type="text" id="email" onChange={e => setEmail(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="pass">Password: </label>
                                                <input type="text" id="pass" onChange={e => setPassword(e.target.value)} required className="form-control page form-control-lg" />


                                        
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="profile">Profile:</label>
                                                        <input type="text" id="blood" onChange={e => setProfile(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="certificateid">Certificate ID:</label>
                                                        <input type="text" id="certificateid" onChange={e => setCertificateID(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="certificate">Certificate:</label>
                                                        <input type="text" id="certificate" onChange={e => setCertificate(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="city">City:</label>
                                                        <input type="text" id="city" onChange={e => setCity(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="state">State:</label>
                                                        <input type="text" id="state" onChange={e => setState(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                    

                                            <input type="submit" onClick={registerPersonnel} className="btn btn-success page btn-lg mb-1" value='Register'></input>



                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Log In</Accordion.Header>
                                        <Accordion.Body>

                                        <div className="form-outline mb-4">
                                                <label className="form-label" for="email">Email: </label>
                                                <input type="text" id="email" onChange={e => setEmail(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="pass">Password: </label>
                                                <input type="text" id="pass" onChange={e => setPassword(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>
                                            <input type="submit" onClick={loginPersonnel} className="btn btn-success page btn-lg mb-1" value='Login'></input>


                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Supplier</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Register</Accordion.Header>
                                        <Accordion.Body>
                                        <label className="form-label gx-5" id='headingteammem' for="form3Example1q">Enter Details of Supplier</label>
                                            <div className="row rowforflname" >

                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="name"> Name:</label>
                                                        <input type="text" id="lastName" className="form-control page form-control-lg" required onChange={e => setName(e.target.value)} />

                                                    </div>

                                                </div>

                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="mobile">Mobile Number: </label>
                                                        <input type="text" className="form-control page form-control-lg" id="mobile" onChange={e => setNumber(e.target.value)} required />

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="email">Email: </label>
                                                <input type="text" id="email" onChange={e => setEmail(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="pass">Password: </label>
                                                <input type="text" id="pass" onChange={e => setPassword(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>


                                            
                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="certificateid">Certificate ID:</label>
                                                        <input type="text" id="certificateid" onChange={e => setCertificateID(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="certificate">Certificate:</label>
                                                        <input type="text" id="certificate" onChange={e => setCertificate(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
</div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="address">Address:</label>
                                                        <input type="text" id="address" onChange={e => setAddress(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="city">City:</label>
                                                        <input type="text" id="city" onChange={e => setCity(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <div className="row rowfordegbran" >
                                                <div className="col-md-6 mb-4">

                                                    <div className="form-outline">
                                                        <label className="form-label" for="state">State:</label>
                                                        <input type="text" id="state" onChange={e => setState(e.target.value)} required className="form-control page form-control-lg" />

                                                    </div>

                                                </div>
                                            </div>

                                            <input type="submit" onClick={registerSupplier} className="btn btn-success page btn-lg mb-1" value='Register'></input>


                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Log In</Accordion.Header>
                                        <Accordion.Body>

                                        <div className="form-outline mb-4">
                                                <label className="form-label" for="email">Email: </label>
                                                <input type="text" id="email" onChange={e => setEmail(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" for="pass">Password: </label>
                                                <input type="text" id="pass" onChange={e => setPassword(e.target.value)} required className="form-control page form-control-lg" />


                                            </div>
                                            <input type="submit" onClick={loginSupplier} className="btn btn-success page btn-lg mb-1" value='Login'></input>


                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    )
}

export default Authentication