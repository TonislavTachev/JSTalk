
import socketClient from 'socket.io-client'
let socket
const ENDPOINT = "http://127.0.0.1:3001"

export const initiateSocket = (room) =>{
   socket = socketClient(ENDPOINT);
   if(room && socket){
       socket.emit("joinRoom", room);
   }
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if(socket) socket.disconnect();
}

export const sendMessageInRoom = (room, message) =>{
    if(socket && room){
        socket.emit("sendMessage", {room, message});
    }
} 

export const receiveMessageAndDisplay = () =>{
        socket.on("receiveMessage", (data)=>{
           return data;
        })
    }
