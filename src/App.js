import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const userLogger = "Alfahmada";
    const userLoggerJsx = <strong> Alfa For Me </strong>;

    return (<div className="App" >
        {userLogger}
        {userLoggerJsx}
    </div>
    );
}

export default App;