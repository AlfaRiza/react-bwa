import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
    const category = "RUNNING";
    const price = 175000;
    return (
        <div class="Parentbox">
            <div class="Foto">
                <img src="foto.jpeg" alt="" />
            </div>
            <div class="Deskripsi">
                <h1 class="Cate">{category}</h1>
                <p class="Title">Jaket Koding</p>
                <p class="Price">IDR. {price}</p>
                <p class="Info">
                    jaket design edisi koding, terdiri dari framework dan tools yang sering digunakan ngoding sehingga terlihat keren
                </p>
            </div>
        </div>
    );
}

export default App;