import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter/counter';
import { Provider } from 'react-redux'
import { countStore } from './store/reducer';

const App = () => (
    <Provider store={ countStore } >
        <Counter />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
