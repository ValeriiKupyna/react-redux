import React, { Component } from 'react';

export default class AppSearch extends Component {
    state = {
        typeValue: 0,
        itemName: ''
    }

    onFilterChanged = () => {
        this.props.onFilterChanged(this.state);
    }

    typeChange(typeValue) {
        this.setState({ typeValue }, this.onFilterChanged)
    }

    onChange = (event) => {
        this.setState({ itemName: event.target.value}, this.onFilterChanged);
    };

   render() {
    return (
        <div>
            <input placeholder='search' value={ this.state.itemName } onChange = { this.onChange }/>
            <button onClick={ () => this.typeChange(0) }>All</button>
            <button onClick={ () => this.typeChange(1)}>Active</button>
            <button onClick={ () => this.typeChange(-1)}>Done</button>
        </div>)
   }
};
