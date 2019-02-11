import React from 'react';
import AppListItem from '../app-list-item';

const AppList = ({ todoList, onRemove, onImportant, onDone }) => {
    return (
        <ul>
            { todoList && todoList.map((item) => (
            <li key={item.id}>
                <AppListItem  {...item}
                              onRemove={ onRemove }
                              onDone = { onDone }
                              onImportant={ onImportant }/>
            </li>)
            )}
        </ul>
    );
}

export default AppList;