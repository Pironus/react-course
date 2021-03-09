//imports
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore();

//addExpense -> 
store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 4500
}))

store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 1000
}))

store.dispatch(addExpense({
    description: 'Rent',
    amount: 1095,
    createdAt: 1000
}))

//set up provider
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render( jsx, document.getElementById("app") )
