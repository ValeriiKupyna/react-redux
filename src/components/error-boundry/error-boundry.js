import React, { Component } from 'react';
import Error from '../app-error/app-error';

export default class ErrorBoundy extends Component {

    state = {
        isError: false
    }

    componentDidCatch() {
        this.setState({ isError: true })
    }

    render() {
       return this.state.isError ? <Error /> : this.props.children;
    }
}
