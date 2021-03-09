import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

//Component using props
const ExpenseList = (props) => {
   return (
      <div> 
         <h1>Expense List</h1>
         {props.expenses.map((expense)=>{
             return (
                 <div>
                    <ExpenseListItem 
                        key={expense.id}
                        {...expense}
                    />
                 </div>
             )
         })}
      </div>
   )
}

//maps State from Store to local Props for Comp to use
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

//export connected component
export default connect(mapStateToProps)(ExpenseList);

