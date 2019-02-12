import React from 'react';
import { Redirect } from 'react-router-dom';

const LogginPage = ({ isLoggedIn, onLoggin }) => isLoggedIn ? <Redirect to={'/'} /> : (
    <div>
        <h2>Loggin Page</h2>
        <button className="btn btn-primary" onClick={ onLoggin }>Loggin</button>
    </div>
)

export default LogginPage;