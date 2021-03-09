import {createStore} from 'redux';


//ACTION FUNCTIONS
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({count}) => ({
    type: 'SET',
    count: count
})

// Reducer
// règles de stockage
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {count: state.count + incrementBy }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {count: state.count - decrementBy }
        case 'RESET':
            return {count: 0}
        case 'SET':
            return {count: action.count}
        default:
            return state
    }
}


//CREATE STORE
const store = createStore(countReducer)


//TRACK ACTIONS
store.subscribe(()=>{
    console.log(store.getState())
})


//USE ACITONS
store.dispatch(incrementCount({incrementBy:5}))

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({count:100}))




