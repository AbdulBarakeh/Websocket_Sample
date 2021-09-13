# Websocket_Sample
This sample showcases a SPA PWA with websocket capabilities and states.
## Features
- SPA structure with the use of "react-router-dom"
- Counter that shows the use of states
- Websocket communication on ViewTwo

## How to run the program
1. open the project folder in VSCode
2. open SERVER dir in terminal 
3. run "npm run start"
4. open the root dir in terminal 
5. run "npm run start"

## How to use websocket connection
1. open two browser windows and go to the app URL
2. navigate to ViewTwo 
3. If conenction to the server is successful, the server will send the message "This message was pushed by the WebSocket server".
4. When one browser writes something in the textbox and presses send, the server recieves the message and sends it to all the conencted clients.