import React, { Component } from 'react';
import Header from '../app-header';
import AppSearch from '../app-serch';
import AppList from '../app-list';
import AddItemForm from '../app-add-item-form';


export default class App extends Component {
    state = {
        typeValue: 0,
        itemName: '',
        todoList: [
            {label: 'test1', important: true, id: 1,  done: false},
            {label: 'test2', important: false, id: 2, done: false},
            {label: 'test3', important: false, id: 3, done: false},
        ]
    }

    _getEmemetIndexById = (id) => {
       const { todoList } = this.state;

       return todoList.findIndex(item => item.id === id);
    }

    _createNewItem = (label) => ({label, important: false, id: Math.random(), active: false, done: false});

    _toggelProperty = (id, arr, key) => {
        const index = this._getEmemetIndexById(id);

        const newArr = [...arr];

        const updateItem = {...newArr[index], [key]: !newArr[index][key]};
        newArr[index] = updateItem;

        return newArr;
    }

    onRemove = (id) => {
        this.setState(({ todoList }) => ({ todoList: todoList.filter(item => item.id !== id)}));
    }

    onImportant = (id) => {
        this.setState(({ todoList }) => {
            return { todoList: this._toggelProperty(id, todoList, 'important') };
        });
    }

    onDone = (id) => {
        this.setState(({ todoList }) => {
            return { todoList: this._toggelProperty(id, todoList, 'done') };
        });
    }

    onCreate = (label = 'test item') => {
        const newItem =  this._createNewItem(label);
        this.setState(({todoList}) => ({ todoList: [...todoList, newItem] }));
    }

    onFilterChanged = (params) => {
        this.setState(params);
    }

    filteredByType() {
        const { typeValue, todoList } = this.state;

        switch(typeValue) {
            case 1: return todoList.filter(({ done }) => !done);
            case -1: return todoList.filter(({ done }) => done);
            default: return todoList

        }
    }

    getFilteredList() {
        const { itemName } = this.state;

        return this.filteredByType().filter((item) => {
            return item.label.toLowerCase().startsWith(itemName.toLowerCase());
        })
    }

    render() {
        const { todoList } = this.state;
        const doneCount = todoList.filter(({ done }) => done).length;
        const todoCount = todoList.length - doneCount;

        return (
            <div>
                <Header todoCount = { todoCount } doneCount = { doneCount } />
                <AppSearch onFilterChanged = { this.onFilterChanged }/>
                <AppList todoList={ this.getFilteredList() }
                         onRemove={ this.onRemove }
                         onDone = { this.onDone }
                         onImportant={ this.onImportant }/>
                <AddItemForm onCreate = { this.onCreate }/>
            </div>
        );
    }
};