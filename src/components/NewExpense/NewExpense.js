import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
// import ExpenseDate from "../Expenses/ExpenseDate";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const ExpenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(ExpenseDate);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseDate={saveExpenseDateHandler}
                    onCancle={stopEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
