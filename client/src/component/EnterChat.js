import React, {useState, useRef} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import socketIO from 'socket.io-client';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
const ENDPOINT = "http://127.0.0.1:3001"
const EnterChat = (props) => {
    
    const [name, setName] = useState("");

    // const [name, setName] = useState("");
    const ref = useRef(null);
    var socket = socketIO(ENDPOINT)

    const sendName = (e) =>{
      const room = e.currentTarget.id;
       props.history.push('/room', {roomName: room});
    }

    return (
        <div className="container">
        <h5 style={{marginTop:10}}>Public list of available rooms!</h5>
        <Row style={{marginTop:50}}>
      <Col sm="4">
        <Card body>
          <CardTitle><b>React.js</b></CardTitle>
          <CardText>Talk about your experience with React and make new connections!</CardText>
          <Button id="React" style={{backgroundColor:'blue', color:'white'}} onClick={sendName}>Join room</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle><b>Vue.js</b></CardTitle>
          <CardText>Talk about your experience with Vue and make new connections!</CardText>
          <Button id="Vue" style={{backgroundColor:'blue', color:'white'}} onClick={sendName}>Join room</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle><b>Angular.js</b></CardTitle>
          <CardText>Talk about your experience with Angular and make new connections!</CardText>
          <Button id="Angular" style={{backgroundColor:'blue', color:'white'}} onClick={sendName}>Join room</Button>
        </Card>
      </Col>
    </Row>
        </div>
    )
}

export default EnterChat;
