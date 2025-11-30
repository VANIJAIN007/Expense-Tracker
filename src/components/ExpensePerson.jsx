import React, { useState } from 'react'
import { ExpenseSplit } from './ExpenseSplit'

export const ExpensePerson = (props) => {
    const [amount, setAmount] = useState('');
    const [enteredText, setEnteredText] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [summaryAll, setSummaryAll] = useState(false);
    const [flag, setFlag] = useState(false);
    const [expenseData, setExpenseData] = useState(null);
    const [store, setStore] = useState([]);
    const textChangeHandler1 = (e) => {
        const newText = e.target.value;
        setEnteredText(newText);
    }
    const textChangeHandler2 = (e) => {
        const newamount = e.target.value;
        setAmount(newamount);
    }
    const textChangeHandler3 = (e) => {
        const newSelected = e.target.value;
        setSelectedValue(newSelected);
    }
    const deleteExpense=(index)=>{
        alert("Do you want to delete this expense");
        setStore(store.filter((_,id)=>index!=id));
    }
    const addingExpense = () => {
        if (enteredText.trim() === '' || !selectedValue || !amount) {
            alert("Fill all the fields");
            return;
        }
        else {
            const data = {
                payee: selectedValue,
                title: enteredText,
                amount: parseFloat(amount)

            }
            setStore([...store, data]);
            setSelectedValue('');
            setEnteredText('');
            setAmount('');
            setExpenseData(data);
            setSummaryAll(true);
            setFlag(true);

        }
    }
    return (
        <div><h3 className="section-title">Add Expense</h3>
            <div className="input-group">
                <input type="text" placeholder='Ex.Dinner party' value={enteredText} onChange={textChangeHandler1} />
                <select onChange={textChangeHandler3} value={selectedValue}>
                    {
                        props.peopleList.map((i) => {
                            return <option>{i}</option>
                        })
                    }
                </select>
                <input type="number" placeholder='Enter amount' onChange={textChangeHandler2} />
                <button onClick={addingExpense} >ADD EXPENSE</button>
                <div className="expense-list">
                    <h2>Expenses</h2>
                    {store.map((i, index) => (
                        <div key={index} className="expense-item">
                            
                            <div className="expense-icon">💰</div>
                            <div className="expense-info">
                                <p><strong className="payer">{i.payee}</strong> paid <strong className="amount">₹{i.amount}</strong></p>
                                <p className="expense-title">for <span>{i.title}</span></p>
                                <button onClick={()=>{deleteExpense(index)}}>Delete Expense</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* {summaryAll && (
                    <p>{`${selectedValue} spent ${amount} on ${enteredText}`}</p>
                )} */}
                <ExpenseSplit expensepeople={store} expenseDataSplit={expenseData} forCheck={flag} expenseSplit={props.peopleList} />

            </div></div>


    )
}
