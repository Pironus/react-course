import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({description,amount,createdAt,id}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount).format('$0,0.00')} 
            - 
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
    </div>
)

export default ExpenseListItem;
