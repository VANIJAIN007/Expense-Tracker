import React from 'react'
import { useState } from 'react';
import { ExpensePerson } from './ExpensePerson';
export const Addpeople = () => {
    const [text, setText] = useState('');
    const [people, setPeople] = useState([]);
    const textChangeHandler = (e) => {
        const newText = e.target.value;
        setText(newText);
    }
    const addpeople = () => {
        if (text.trim() === '') return;
        setPeople([...people, text]);
        setText('');
    }
    const deletePerson = (id) => {
        console.log("entered");
        console.log(id)
        setPeople(people.filter((_, index) => index != id));
    }
    return (
        <div className="section-container">
  <div className="section">
    <h3 className="section-title">Add Friends</h3>
    <div className="input-group">
                <input type="text" placeholder='Enter friend name' onChange={textChangeHandler} value={text} />
                <button onClick={addpeople}>ADD</button>
                <ul>
                    {
                        people.map((person, id) => {
                            return <><li key={id}>{person}</li>
                                <button onClick={() => deletePerson(id)}>Remove</button></>
                        })
                    }
                </ul>
  </div>

  <div className="section">
    <ExpensePerson peopleList={people}/>
  </div>
</div>
</div>


    )
}
