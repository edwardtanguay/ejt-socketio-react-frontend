import { useEffect } from 'react';
import './App.scss';
import { initiateSocketConnection, reportConnection } from './socketio.service';

function App() {
	useEffect(() => {
		initiateSocketConnection();
		reportConnection((err, data) => {
			console.log(data);
		});
		return () => {
			disconnectSocket();
		};
	}, []);

	return (
		<div className="App">
			<h1>Socket.io frontend</h1>
		</div>
	);
}

export default App;
