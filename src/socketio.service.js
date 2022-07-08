import { io } from 'socket.io-client';

let socket;

export const initiateSocketConnection = () => {
	socket = io(import.meta.env.VITE_SOCKET_ENDPOINT);
};

export const reportConnection = (cb) => {
	socket.emit('reportConnection', 'connected');
};
