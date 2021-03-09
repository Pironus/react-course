import {createStore, compbineReducers, combineReducers} from 'redux';
import uuid from 'uuid'
import EditExpensePage from '../components/EditExpensePage';


const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

// ACTION GENRATOR FUNCTIONS
///////// ///////// ///////// ///////// 
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description: description,
        note: note,
        amount: amount,
        createdAt: createdAt
    }
})

const removeExpense = ( {id} = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id: id
})

const editExpense = ( id , updates ) => ({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
})

const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text: text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: "amount"
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: "date"
})

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate: startDate
})

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate: endDate
})


// REDUCERS SET UP
///////// ///////// ///////// ///////// 
//expsenses reducer
 const expensesReducer = (state = expensesReducerDefaultState,action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            //spread synthax
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(expense => expense.id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else{
                    return expense
                }
            })
        default:
            return state;
    }
}

//filters reducer 
const filtersReducer = (state = filtersReducerDefaultState,action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                ...action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
                return{
                    ...state,
                    endDate: action.endDate
                }
        default:
            return state;
    }
}

// CREATE STORE COMBINING REDUCERS TOGETHER
///////// ///////// ///////// ///////// 
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)


// Get visble expenses
const getVisibleExpenses = (expenses,{text,sortBy,startDate, endDate}) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'date' ){
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if(sortBy === 'amount' ){
            return a.amount < b.amount ? 1 : -1
        }
    })
}


///////// CHANGING STATES BY DISPATCHING
///////// ///////// ///////// ///////// 

// watch states
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})

// add items
const expenseOne = store.dispatch(addExpense({
    description: 'Rent',
    amount: '2000',
    createdAt: 1000
}))
const expenseTwo = store.dispatch(addExpense({
    description: 'New',
    amount: '1000',
    createdAt: 900
}))

//remove item
// store.dispatch(removeExpense({
//     id: expenseTwo.expense.id
// }))

//edit expense
// store.dispatch(editExpense(expenseOne.expense.id, {amount: 10, description: "HEY"}))

//Filter expense based on text
// store.dispatch(setTextFilter({
//     text: 'New'
// }))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setEndDate(100))
// store.dispatch(setStartDate(124))



// const demoState = {
//     expenses: [{
//         id: 'argsthr',
//         description: 'Jarnuary Rent',
//         note: 'This was the final payment for that address',
//         amount: 54400,
//         createdAt: 0
//     }],
//     filters:{
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// }





