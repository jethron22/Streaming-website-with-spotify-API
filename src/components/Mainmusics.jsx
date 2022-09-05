import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Container, InputGroup, FormControl, Button, Row} from"react-bootstrap";
import { useState, useEffect } from "react";

const CLIENT_ID = "3ef00953d1fb46f8a315b8b4f9141d86";
const CLIENT_SECRET = "1dda9ed5c4ff447fbfd0b8d560fce93f";
	

function Mainmusics({}) {
	const [searchInput, setSearchInput] = useState("koffi");
	const [accessToken, setAccessToken] = useState("")

	useEffect(() => {

		let authParameters = {
			method: 'POST',
			headers: {
				'Content-Type': ' application/x-www-form-urlencoded'
				
			},
			body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
		}

		fetch("https://accounts.spotify.com/api/token", authParameters).then(result => result.json()).then(data => {
			setAccessToken(data.access_token)
			console.log(data);
			search()
		})
	
	}, []);
	
    // Système de Recherche des musiques

	async function search () {
		console.log("Trouver" + searchInput);
		// Trouver l'ID de l'artiste au moyen de la recherche implementé//

		let parametresRecherche= {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization : 'Bearer  ' + accessToken
			}
		}

		console.log(accessToken)

		let artistID = fetch("https://api.spotify.com/v1/search?q=" + searchInput + '&type=artist', parametresRecherche).then(response => response.json()).then(data => { return data.artists.items[0].id })
		
		console.log("Artist ID is" + artistID);

		let album = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50').then(response => response.json()).then(data => {
			console.log();
		})

		// Afficher les albums d'artistes aux utilisateurs //
		
	};


	return (
    <div>
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Rechercher un artiste"
            type="Input"
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                search()
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={search}>
            rechercher
          </button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row row-cols-4">
          <Card>
            <Card src="#" />
            <Card.Body>
              <Card.Title> Nom de l'album</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card src="#" />
            <Card.Body>
              <Card.Title> Nom de l'album</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card src="#" />
            <Card.Body>
              <Card.Title> Nom de l'album</Card.Title>
            </Card.Body>
          </Card>

          <Card>
            <Card src="#" />
            <Card.Body>
              <Card.Title> Nom de l'album</Card.Title>
            </Card.Body>
		</Card>
					
        </Row>
      </Container>
    </div>
  );
}

export default Mainmusics;
