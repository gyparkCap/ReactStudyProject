import React, { useState } from 'react';
import axios from 'axios';

function PropertyForm() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [rateOfReturn, setRateOfReturn] = useState('');
    const [tax, setTax] = useState('');
    const [startDate, setStartDate] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [memo, setMemo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8081/property', null, {
            params: {
                name,
                type,
                amount: Number(amount),
                rateOfReturn,
                tax,
                startDate,
                expireDate,
                memo
            }
        })
            .then(response => {
                console.log('Property saved successfully:', response);
            })
            .catch(error => {
                console.error('Error saving property:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Type:</label>
                <input
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Rate of Return:</label>
                <input
                    type="text"
                    value={rateOfReturn}
                    onChange={(e) => setRateOfReturn(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Tax:</label>
                <input
                    type="text"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Expire Date:</label>
                <input
                    type="date"
                    value={expireDate}
                    onChange={(e) => setExpireDate(e.target.value)}
                />
            </div>
            <div>
                <label>Memo:</label>
                <textarea
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                />
            </div>
            <button type="submit">Save Property</button>
        </form>
    );
}

export default PropertyForm;
