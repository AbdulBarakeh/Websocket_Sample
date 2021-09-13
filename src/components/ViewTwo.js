import React from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:8085');
export default class ViewTwo extends React.Component {
componentDidMount(){

  client.onopen = () => {
    console.log('WebSocket Client Connected');
  };
  client.onmessage = (message) => {
    let msgDiv = document.getElementById("message")
    msgDiv.innerHTML += `${message.data} <br/>`
  };
  
}
SendMsg = () =>{
  let msg = document.getElementById("messageInput")
  client.send(msg.value)
}
  render() {
    return (

      <div className="viewTwo">
        <div className="center">

          {this.props.text}
        <br/>
        <input type="text" className="messageInput" id="messageInput"/>
        <button onClick={this.SendMsg}> Send</button>
        <div className="message" id="message"></div>

      </div>
      </div>
    );
  }
}
