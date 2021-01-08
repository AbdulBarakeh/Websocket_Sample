import './App.css';
import React from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom";
import Home  from "./components/Home";
import SideBar from './components/Sidebar';
import ViewOne from './components/ViewOne';
import ViewTwo from './components/ViewTwo';

export class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
      <div className="fullcontainer">
        <SideBar></SideBar>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/ViewOne" component={() => <ViewOne text={"This is the magnificent ViewOne"} />} /> 
            <Route exact path="/ViewTwo" component={() => <ViewTwo text={"This is the magnificent ViewTwo"} />} /> 
          </Switch>
        </div> 
      </div>
    </BrowserRouter>
  ); 
  }
}

