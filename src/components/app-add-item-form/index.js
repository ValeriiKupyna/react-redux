import React, { Component } from 'react';

export default class AddItemForm extends Component {
    state= {
        label: ''
    };

    onChange = (e) => {
        this.setState({label: e.target.value});
    }
   
    onCreate = (event) => {
        event.preventDefault();
        this.props.onCreate(this.state.label);
        this.setState({label: ''});
    }
    render() {
        return (
            <form onSubmit = { this.onCreate }>
                <input onChange = { this.onChange } value = { this.state.label }/>
                <button>Add New Item</button>
            </form>
        );
    }
}