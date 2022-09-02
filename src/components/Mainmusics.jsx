import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,InputGroup,FormControl,Button, Row, Card} from "react-bootstrap";

import { useEffect, useState } from "react";

function Mainmusics() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Rechercher un artiste"
            type="Input"
            onKeyPress={(event) => {
              if (event.Key == "Enter") {
                console.log(searchInput);
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <button
            onClick={() => {
              console.log("hello world");
            }}
          >
            rechercher
          </button>
        </InputGroup>
		   </container>
		  <Card></Card>

    </div>
  );
}

export default Mainmusics;
