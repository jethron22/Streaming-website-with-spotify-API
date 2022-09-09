import React from "react";
import { Button } from "@mui/material";
import eteindre from "../eteindre.png";

function Deconnexion() {
	return (
		<div>
			<Button variant="contained">
				<img
					className="imgB"
					src={eteindre}
					alt="bouton deconnexion"
				></img>
				Déconnexion
			</Button>
		</div>
	);
}

export default Deconnexion;
