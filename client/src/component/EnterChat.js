import React, {useState, useRef} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import socketIO from 'socket.io-client';
import { Card, CardTitle, CardText, Row, Col, Form, FormGroup, Label, Input, FormFeedback, FormText} from 'reactstrap';
const ENDPOINT = "http://127.0.0.1:3001"
const EnterChat = (props) => {
    
 
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    var socket = socketIO(ENDPOINT)

    const sendName = (e) =>{
      if(name === ''){
         setError(true);
         setTimeout(() => {
           setError(false);
         }, 3000);
      } else{
      const room = e.currentTarget.id;
       props.history.push('/room', {roomName: room, username:name});
      }
    }

    const setUsername = (e) =>{
      const username = e.target.value;
      setName(username);
    }

    return (
        <div className="container">
        <h5 style={{marginTop:10}}>Public list of available rooms!</h5>
        <Row>
          <Col style={{marginTop:20}}> 
          <Form>
             <FormGroup>
                <Label for="exampleEmail"><b>Enter a username</b></Label>
                <Input valid={success} invalid={error} onChange={setUsername}/>
             </FormGroup>
            </Form></Col>
        </Row>
        <Row style={{marginTop:20}}>
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
