import React from 'react';


export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }


    Increment = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    Decrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }
    render(){
        return (
        <div className="home">
            <h1>Welcome to this React SPA</h1>
            <h2>This is a test sample of routing</h2>
            <h3>Look at this counter</h3>
            <h4>count: {this.state.count}</h4>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
        </div>
    );
    }
}
