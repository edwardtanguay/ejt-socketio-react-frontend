import { useEffect } from 'react';
import './App.scss';
import { initiateSocketConnection } from './socketio.service';

function App() {

	useEffect(() => {
		initiateSocketConnection();
	}, []);

	return (
		<div className="App">
			<h1>Socket.io frontend</h1>
		</div>
	);
}

export default App;
