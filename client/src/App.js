import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/Home';
import EnterChat from './component/EnterChat';
import livevisitors from './component/Livevisitors';
import Navigation from './component/Navigation';
function App() {
 
  useEffect(()=>{
   
  },[])

  return (
    <div className="App">
    <Router>
    <Navigation/>
          <Switch>
            <Route exact path="/" component={EnterChat}/>
            <Route exact path="/livevisitors" component={livevisitors}/>
            <Route exact path="/room" component={Home}/>
          </Switch>
    </Router>
    </div>
  );
}

export default App;
