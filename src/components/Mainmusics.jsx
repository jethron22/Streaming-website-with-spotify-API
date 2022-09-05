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

const CLIENT_ID = "3ef00953d1fb46f8a315b8b4f9141d86";
const CLIENT_SECRET = "1dda9ed5c4ff447fbfd0b8d560fce93f";

function Mainmusics({}) {
  const [searchInput, setSearchInput] = useState('Lynnsha');
  const [accessToken, setAccessToken] = useState("");
  const [dataAlbum, setDataAlbum] = useState([]);
  const [artistID, setArtistID] = useState(null);

  useEffect(() => {
    //Output random artist

    let authParameters = {
      method: "POST",
      headers: {
        "Content-Type": " application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
        console.log(data);
        search();
      });
  }, [artistID]);

  // Système de Recherche des musiques

  function search() {
    console.log("Trouver" + searchInput);
    // Trouver l'ID de l'artiste au moyen de la recherche implementé//

    let parametresRecherche = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer  " + accessToken,
      },
    };

    console.log(accessToken);

    fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      parametresRecherche
    )
      .then((response) => response.json())
      .then((data) => {
        /*return data.artists.items[0].id*/
        setArtistID(data.artists.items[0, 1].id);
	  });
	  

	  
	  fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=release_date",
      parametresRecherche
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataAlbum(data.release_date.items);
      });


    fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput +  "&type=album",
      parametresRecherche
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataAlbum(data.albums.items);
      });

    // Afficher les albums d'artistes aux utilisateurs //
  }
  console.log(artistID);

  return (
    <div>
      <Container>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Rechercher un artiste"
            type="Input"
            onKeyDown={(event) => {
              if (event.key == "Enter") {
                search();
              }
            }}
					  onChange={(event) => {
						  setSearchInput(event.target.value); {
              search();
            } }}
          />
          <button type="button" className="btn btn-primary" onKeyDown={search}>
            rechercher
          </button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="w-100 mx-2 row row-cols-2">
          {dataAlbum.map((album, i) => {
            return (
              <Card className="shadow-lg m-2" style={{ width: "250px" }}>
                <img src={album.images[0].url} />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <Card.Title>{album.release_date}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Mainmusics;
