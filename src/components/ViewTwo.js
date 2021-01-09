import React from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://localhost:8085');
export default class ViewTwo extends React.Component {
componentDidMount(){

  client.onopen = () => {
    console.log('WebSocket Client Connected');
  };
  client.onmessage = (message) => {
    console.log(message.data);
    let msgDiv = document.getElementById("message")
    msgDiv.innertext += message.data
  };
  
}
SendMsg = () =>{
  let msg = document.getElementById("messageInput")
  client.send(msg.value)
}
  render() {
    return (

      <div className="viewTwo">
          {this.props.text}
        <br/>
        <input type="text" className="messageInput" id="messageInput"/>
        <button onClick={this.SendMsg}> Send</button>
        <div className="message" id="message"></div>
      </div>
    );
  }
}
