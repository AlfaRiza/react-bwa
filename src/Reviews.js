import React from 'react';
// import logo from './logo.svg';
import './App.css';

function Reviews() {
    const users = [
        {
            "id": 1,
            "name": "Setiawan",
            "review": "Murah meriah wa 08222222222",
        },
        {
            "id": 2,
            "name": "Sari",
            "review": "Jelek",
        },
        {
            "id": 3,
            "name": "Saru",
            "review": "Losss sok kabeh",
        },
    ];

    const ListUsers = users.map((ItemUsers) =>
        <div className="User">
            <h3 key={ItemUsers.id}>{ItemUsers.name}</h3>
            <p>{ItemUsers.review}</p>
        </div>
    );

    return ListUsers;
}

export default Reviews;