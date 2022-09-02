import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
} from "react-bootstrap";
import { useState, useEffect } from "react";

function Mainmusics() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Rechercher un artiste"
            type="Input"
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                console.log(searchInput);
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              console.log("hello world");
            }}
          >
            rechercher
          </button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card src="#" />
            <Button>
              <Card.Title> Nom de l'album</Card.Title>
            </Button>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Mainmusics;
