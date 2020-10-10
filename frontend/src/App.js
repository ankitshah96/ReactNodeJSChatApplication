import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './Container/Chat';

function App() {
  const [connectionState,setConnectionState]=useState('Disconnected');
  const getStatusCallback= (status) => {
    setConnectionState(status);
  }
  return (
    <div className="App">
        
        <div className="connectionStatus">
        Connected: <span className={connectionState==="Disconnected"? "redDot":"greenDot"}></span>
        </div>
        <header className="App-header">
       
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h5 className="App-title">Welcome to React Chat Application</h5>
          IP Address: {window.location.href.replace('http://','').replace(':3001/','')}
          <Chat 
            statusCallback={getStatusCallback}
          />
        </header>
        
      </div>
  );
}

export default App;
