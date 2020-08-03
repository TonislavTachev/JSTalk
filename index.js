const express = require('express');
const app = express();
const http = require("http");
const socketIo = require('socket.io');


// app.use(main);

const server = http.createServer(app);  
const io = socketIo(server);

//Run when a client connects
io.on('connection', socket =>{
     
    socket.broadcast.emit("Greet", "User has connected to the room!");

    //join room
    socket.on('joinRoom', (room)=>{
        socket.join(room);
        console.log(`Joined a ${room} chat room`);
    })

    //listen for messages
    socket.on("send", (data)=>{
        const {room, message} = data;
        io.to(room).emit('receiveMessage', message);
    })

    socket.on("disconnect",()=>{
        io.emit('myCustomDisconnect',"User Disconnected from room!");
     });
 
})

const port = process.env.port || 3001;

server.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})