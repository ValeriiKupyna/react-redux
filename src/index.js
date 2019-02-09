import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/app-header';
import AppList from './components/app-list';
import AppSearch from './components/app-serch';

const todoList = [
    {label: 'test1', important: true, id: 1},
    {label: 'test2', important: false, id: 2},
    {label: 'test3', important: false, id: 3},
];

const App = () => (
    <div>
        <Header />
        <AppSearch />
        <AppList todoList={todoList}/>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
