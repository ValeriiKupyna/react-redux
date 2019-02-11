import React from 'react';

const Header = ({ todoCount, doneCount }) => (
    <div>
        <h1>TODO LIST</h1>

        <div>todoCount: { todoCount }</div>
        <div>doneCount: { doneCount }</div>

    </div>
);

export default Header;