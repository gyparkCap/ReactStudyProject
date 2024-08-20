import React, { useState, useEffect } from 'react';
import Test from './test'; // 'test' 대신 'Test'로 수정
import axios from 'axios';

function PropertyList() {
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // API 요청 보내기
        axios.get('http://localhost:8081/property')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setProperties(response.data);
                } else {
                    setError('Unexpected response format');
                }
            })
            .catch(error => {
                console.error('Error fetching the properties:', error);
                setError('Error fetching the properties');
            });
    }, []);

    return (
        <div>
            <h1>Properties</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {properties.length === 0 && !error && <p>No properties available</p>}
            {properties.length > 0 && (
                <table border="1" cellPadding="10" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Rate of Return</th>
                        <th>Tax</th>
                        <th>Total Amount</th>
                        <th>Start Date</th>
                        <th>Expire Date</th>
                        <th>Memo</th>
                        <th>Member Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {properties.map(property => (
                        <tr key={property.id}>
                            <td>{property.id}</td>
                            <td>{property.name}</td>
                            <td>{property.type}</td>
                            <td>{property.amount}</td>
                            <td>{property.rateOfReturn}</td>
                            <td>{property.tax}</td>
                            <td>{property.totalAmount}</td>
                            <td>{property.startDate}</td>
                            <td>{property.expireDate}</td>
                            <td>{property.memo}</td>
                            <td>{property.member.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
            <Test />
        </div>
    );
}

export default PropertyList;
