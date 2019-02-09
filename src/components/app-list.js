import React from 'react';
import AppListItem from './app-list-item';

const AppList = ({ todoList }) => (
    <ul>
        { todoList && todoList.map((item) => (
        <li key={item.id}>
            <AppListItem  {...item}/>
        </li>)
        )}
    </ul>
);

export default AppList;