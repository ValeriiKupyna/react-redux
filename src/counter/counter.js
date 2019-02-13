import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter, inc, dec, random }) => {
    return (
        <div>
            <h2>{ counter }</h2>

            <button onClick={inc}>inc</button>
            <button onClick={dec}>dec</button>
            <button onClick={random}>random</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        counter: state
    }
}

export default connect(mapStateToProps)(Counter);