// const webSocketsServerPort = 8000;
// const webSocketServer = require('websocket').server;
// const http = require('http');
// // Spinning the http server and the websocket server.
// const server = http.createServer();
// server.listen(webSocketsServerPort);
// const wsServer = new webSocketServer({
//   httpServer: server
// });

const express = require("express");
const http = require("http")
const { Server } = require('ws');

const app = express()
//WebSocketServer
let clients = []
const wsServer = new Server({ port: 8085 });
console.log("WebSocket server is listening on localhost:8085");
wsServer.on("connection", (wsClient) => {

    wsClient.send("This message was pushed by the WebSocket server");

    wsClient.onerror = (error) =>
        console.log(`The server received the error:${error["code"]}`);
    
    clients.push(wsClient)
    
    wsClient.onmessage = (message)=>
        clients.forEach((client) =>client.send(`The server received:${message['data']}`)) 
});
