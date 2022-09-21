import './App.css';
import Login from './components/Login';
import Mainmusics from './components/Mainmusics';
import { BrowserRouter, Route, Router } from 'react-router-dom';



function App() {

    return (
		<div>
			<Login />
            <Mainmusics />
		</div>
	);
}

export default App;
