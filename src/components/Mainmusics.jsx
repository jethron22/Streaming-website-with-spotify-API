import React from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row } from "react-bootstrap";
import {Card} from 'react-bootstrap';
import{useState, useEffect } from 'react'


function Mainmusics() {

const [searchInput, setSearchInput] = useState("");

  return (
    <div>
        <container>
            <InputGroup className="mb-3" size="lg">
<FormControl placeholder="Rechercher un artiste"
type="Input" 
onKeyDown={ event => {
    if (event.key == "Enter" ) {
      console.log("pressed enter");
    }
}}


onChange={event => setSearchInput(event.target.value)}


/>
<button type="button" class="btn btn-primary" onClick={()=>{console.log("hello world")}}>
rechercher
</button>

            </InputGroup>
        </container>
        <Container>
<Card>
  <Card src="#" />
  <Button.Body>
    <Card.Title> Nom de l'album</Card.Title>
  </Button.Body>
</Card>
</Container>
    </div>
  )
}

export default Mainmusics

