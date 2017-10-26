import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = { userName: ''};

    handleSubmit = (event) => {
        event.preventDefault();
        let url = "https://api.github.com/users/" + this.state.userName;
        
        axios.get(url)
        .then( resp => {
                this.props.onSubmit(resp.data)
        })    
    }
    
    onChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.userName} onChange={this.onChange} placeholder="Github username" required />
            <button type="submit">Add card</button>
            </form>
        );
    }
}

export default Form