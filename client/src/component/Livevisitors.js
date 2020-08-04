import React, {useEffect, useState} from 'react'
import { Table } from 'reactstrap';
import socketIO from 'socket.io-client';
import TableRoll from './TableRoll'
const Livevisitors = () => {
    const ENDPOINT = "http://127.0.0.1:3001"
    var socket = socketIO(ENDPOINT);
    const [react, setReact] = useState("");
    const [angular, setAng] = useState("");
    const [vue, setVue] = useState("");
        useEffect(()=>{
      socket.on('connect', ()=>{});
        setInterval(() => {
          socket.emit('getListOfUserInReact', {room1:'React'});
          socket.emit('getListOfUserInAngular', {room1:'Angular'});
          socket.emit('getListOfUserInVue', {room1:'Vue'});
        }, 5000);
     
        socket.on("ListOfReact", (data)=>{
          setReact(data);
        })
        socket.on("ListOfVue", (data)=>{
          setVue(data);
        })
        socket.on("ListOfAngular", (data)=>{
          setAng(data);
        })
    },[])

    return (
    <div className="container" style={{marginTop:20}}>
        <h5>Current visitors</h5>
        <Table>
      <thead>
        <tr>
          <th>Room</th>
          <th>People in room</th>
        </tr>
      </thead>
      <tbody>
         <tr>
             <td>React</td>
            <td><b>{react}</b> users currently in room</td>
          </tr>
          <tr>
             <td>Vue</td>
             <td><b>{vue}</b> users currently in room</td>
          </tr>
          <tr>
             <td>Angular</td>
             <td><b>{angular}</b> users currently in room</td>
          </tr>
      </tbody>
    </Table>
    </div>
    )
}

export default Livevisitors;
