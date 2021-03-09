import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({description,amount,createdAt,id}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem;
