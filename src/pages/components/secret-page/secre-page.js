import React from 'react';
import { Redirect } from 'react-router-dom';

const SecrePage = ({ isLoggedIn }) => isLoggedIn ? (
    <div>
        <h2>Secret Data</h2>
    </div>
) : <Redirect to={'/loggin'} />

export default SecrePage;