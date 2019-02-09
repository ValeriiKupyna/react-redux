import React from 'react';

const AppListItem = ({ label, important = false}) => {
    const style = {
        color: important ? 'red' : 'black'
    }
    return (
        <span style={style}>{ label }</span>
    );
};

export default AppListItem;
