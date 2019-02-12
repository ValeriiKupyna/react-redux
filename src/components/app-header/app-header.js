import React from 'react';
import { Link } from 'react-router-dom';

export const AppHeader = () => {
    return (
        <div className='header d-flex jus'>
            <h3><Link to="/">StartDB</Link></h3>

            <ul className='d-flex ml-5'>
                <li className="ml-5">
                    <Link to="/people/">People</Link>
                </li>

                <li className="ml-5">
                    <Link to="/planets/">Planets</Link>
                </li>

                <li className="ml-5">
                    <Link to="/starships/">Starships</Link>
                </li>

                <li className="ml-5">
                    <Link to="/loggin">Loggin</Link>
                </li>

                <li className="ml-5">
                    <Link to="/secret">Secret</Link>
                </li>
            </ul>

        </div>
    );
}