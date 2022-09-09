import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function SimpleBottomNavigation() {
	const [value, setValue] = React.useState(0);

	return (
		<Box sx={{ width: 180 }}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction
					label="Réjouer"
					icon={<RestoreIcon />}
				/>
				<BottomNavigationAction
					color="primary"
					label="Play"
					icon={<PlayArrowIcon fontSize="large" />}
				/>
				<BottomNavigationAction
					label="J'aime"
					icon={<FavoriteIcon />}
				/>
			</BottomNavigation>
		</Box>
	);
}
