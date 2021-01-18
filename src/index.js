import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';


//register
if(navigator.serviceWorker){
  console.log("Service worker is supported")
  window.addEventListener('load', () =>{
      navigator.serviceWorker.register('./serviceWorker-simple.js')
      .then((reg) =>{ console.log("Serviceworker is registered") })
      .catch((err) => {console.log(`error in serviceworker:${err}`)})
  })
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

