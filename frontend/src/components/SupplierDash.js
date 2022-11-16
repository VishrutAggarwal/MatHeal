import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate, useParams} from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

function SupplierDash() {

  const navigate=useNavigate();
  const {id}=useParams(); 
  const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [stuffList, setStuffList] = useState([]);
  
    const addStuff = () => {
      Axios.post("http://localhost:3001/postsupplierstuff", {
        name: name,
        price: price,
        quantity: quantity,
        id: id,
      }).then(() => {
        setStuffList([
          ...stuffList,
          {
            name: name,
        price: price,
        quantity: quantity,
        id: id,
          },
        ]);
      });
    };
  
    const getStuff = () => {
      Axios.get("http://localhost:3001/getsupplierstuff").then((response) => {
        setStuffList(response.data);
      });
    };

  return (
    <div>
        <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MatHeal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        WELCOME TO SUPPLIER DASHBOARD

        <div className="information">
          <label>Name:</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <label>Price:</label>
          <input
            type="number"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <label>Quantity:</label>
          <input
            type="text"
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          />
          </div>
          <button onClick={addStuff}>Add Products</button>

          {stuffList.map((val, key) => {
            return (
              <div>
                <div>
                  <h3>Name: {val.name}</h3>
                  <h3>Price: {val.price}</h3>
                  <h3>Quantity: {val.quantity}</h3>
                </div>
              
              </div>
            );
          })}
  
    </div>
  )
}

export default SupplierDash