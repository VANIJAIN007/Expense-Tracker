import React, { useState } from 'react'
export const ExpenseSplit = (props) => {
    if (!props.forCheck || !props.expenseDataSplit) {
        return null;
    }
    const { payee, amount } = props.expenseDataSplit;
    const [balance, setBalance] = useState([]);
    const totalFriends = props.expenseSplit.length;
    const amountEach = amount / totalFriends;
    const summary = {};

    props.expenseSplit.forEach((person) => {
        if (!summary[person]) summary[person] = { paid: 0, share: 0 }
        summary[person].share += amountEach;
    });
    if (!summary[payee]) summary[payee] = { paid: 0, share: 0 };
        summary[payee].paid += amount;

    return (
        <>
            <div className="expense-summary">
                <h3>💸 Expense Summary</h3>
               {Object.entries(summary).map(([person, data], index) => {
                const balance = data.paid - data.share;

                return (
                    <div key={index} className="expense-line">
                        <p>
                            <strong>{person}</strong>  
                            {balance > 0
                                ? ` should receive ₹${balance.toFixed(2)}`
                                : balance < 0
                                    ? ` should pay ₹${Math.abs(balance).toFixed(2)}`
                                    : ` is settled`
                            }
                        </p>
                    </div>
                );
            })}

            </div>
        </>

    )
}
