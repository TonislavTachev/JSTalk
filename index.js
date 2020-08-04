const express = require('express');
const app = express();
const http = require("http");
const moment = require('moment');
const socketIo = require('socket.io');


// app.use(main);

const server = http.createServer(app);  
const io = socketIo(server);
var usernames = {};
var numUsers = 0;

//Run when a client connects
io.on('connection', socket =>{
    var addedUser = false;
    socket.broadcast.emit("Greet", "User has connected to the room!");

    //join room
    socket.on('joinRoom', (data)=>{

        socket.join(data.room);
        console.log(`Joined a ${data.room} chat room`);

        socket.username = data.username;
        usernames[data.username] = data.username;
        ++numUsers;
        addedUser = true;

        socket.broadcast.emit('user joined', {
            username: socket.username,
            numUsers: numUsers,
            room: data.room
        });
    })

  //listen for messages in the particular room
    socket.on("send", (data)=>{
        const {room, message, username} = data;
        let current_time = moment().format("HH:mm")
        const obj = {
            data:message,
            username: username,
            current_time
        }
        
        console.log(obj);
        io.to(room).emit('receiveMessage', obj);
    })

    socket.on("disconnect",()=>{
        if (addedUser) {
            delete usernames[socket.username];
            --numUsers;
      
            // echo globally that this client has left
            socket.broadcast.emit('user left', {
              username: socket.username,
              numUsers: numUsers
            });
            socket.emit("myCustomDisconnect");
          }
    });

    socket.on("getListOfUserInReact",(data)=>{
        var room1 = io.sockets.adapter.rooms[data.room1];
        
        if(room1){
            socket.emit("ListOfReact", room1.length);
        } else{
            socket.emit("ListOfReact", 0);
        }   
    })

    socket.on('getListOfUserInAngular', (data)=>{
        var room1 = io.sockets.adapter.rooms[data.room1];
        
        if(room1){
            socket.emit("ListOfAngular", room1.length);
        } else{
            socket.emit("ListOfAngular", 0);
        }   
    });
    socket.on('getListOfUserInVue', (data)=>{
        var room1 = io.sockets.adapter.rooms[data.room1];
        
        if(room1){
            socket.emit("ListOfVue", room1.length);
        } else{
            socket.emit("ListOfVue", 0);
        }   
    });
})

const port = process.env.port || 3001;

server.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})