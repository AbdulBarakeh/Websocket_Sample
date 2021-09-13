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
            <div className="center">

            count: {this.state.count}
            <br/>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
            </div>
        </div>
    );
    }
}

