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
    console.log(`The server received:${error["code"]}`);
    
    clients.push(wsClient)
    
    // wsClient.on("message", function incoming(receivedMsg) {
    //     let parsedMsg = JSON.parse(receivedMsg)
    //     console.log(parsedMsg)
    //     wsClient.send(JSON.stringify(parsedMsg))
    // })
    wsClient.onmessage = (message)=>wsServer.clients.forEach((client) =>wsClient.send(`The server received:${message['data']}`)) 
});

// wsServer.on("message", ()=>{
//     clients.forEach((client) => {
//     client.send("I received something");
//   });
// })

// setInterval(() => {
//   wss.clients.forEach((client) => {
//     client.send(new Date().toTimeString());
//   });
// }, 1000);



// import * as express from "express";
// import * as path from "path";
// import { Server } from "ws";
// const app = express();
// //HTTP Server
// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "../client.html"))
// );

// const httpServer = app.listen(8000, "localhost", () => {
//   console.log(`HTTP on 8000`);
// });
// //WebSocketServer
// const wsServer = new Server({ port: 8085 });
// console.log("WebSocket server is listening on localhost:8085");
// wsServer.on("connection", (wsClient) => {
//   wsClient.send("This message was pushed by the WebSocket server");
//   wsClient.onerror = (error) =>
//     console.log(`The server received:${error["code"]}`);
// });
