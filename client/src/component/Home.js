import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper'
import socketClient from 'socket.io-client'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send'; 
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Scrollbars } from 'react-custom-scrollbars';
import ChatBubble from './ChatBubble';
import GreetingBubble from './GreetingBubble';
// import {initiateSocket, disconnectSocket, sendMessageInRoom, receiveMessageAndDisplay, display} from '../utils/SocketFunctions';

function Home(props) {
  var socket
  const ENDPOINT = "http://127.0.0.1:3001"
  socket = socketClient(ENDPOINT);
  const room = props.location.state.roomName;
  const [successConnect, setConnect] = useState("");
  const [disconnect, setDisconnect] = useState("");
  const [chat, setChat] = useState("");
  const [userCount, setCount] = useState(0);
  const [messagePool, setPool] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(()=>{
   socket.on('connect', ()=>{
     console.log("connecterd")
   })
   socket.emit('joinRoom', room);

   socket.on('receiveMessage', data =>{
     console.log(data);
     setPool(state =>[...state,data]);
   })

   return () => {
    socket.on("myCustomDisconnect", ()=>{
      socket.disconnect();
    })
  }
  },[])

  const sendComment = (e) =>{
      setMessage(e.target.value);
  }

  const sendMessage = () =>{
   if(socket && room){
     socket.emit("send", {room, message});
   }
    setMessage("");
  }
   
  return (
    <div className="App" style={{display:'flex', flexDirection:"column", alignItems:'center'}}>
        <Paper elevation={8} style={{height:600, width:1000, marginTop:50, display:'flex', flexDirection:'column', alignItems:'center', backgroundColor:'#f5fafc'}}>
           
            <Paper evelation={15} style={{height:400, width:800, marginTop:50, marginBottom:20,}}>
                <Scrollbars autoHide
         style={{overflowX:'hidden'}}
         autoHideTimeout={1000}
         autoHideDuration={200}>
           <GreetingBubble/>
                  {messagePool!== null && messagePool.map((el,i) => <ChatBubble chat={el}/>)}
                </Scrollbars>
            </Paper>
           <div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'flex-start'}}>
            <TextField name="comment" style={{width:400, marginLeft:100}} value={message} onChange={sendComment} InputProps={{
              startAdornment:(
                <InputAdornment position="start">
                    <ChatBubbleOutlineOutlinedIcon />
              </InputAdornment>
              
              )
            }}></TextField>
            <Button color="primary" onClick={sendMessage}
            style={{marginLeft:10, width:100}}
            variant="contained"
            startIcon={<SendIcon />}
      >SEND</Button>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', width:'100%', marginLeft:200}}>
               <p>Currently in a <b>{room}</b> room</p>
            </div>
        </Paper>
    </div>
  );
}

export default Home;
