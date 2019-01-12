import React from 'react';
import Search from '../Search/Search';
import './HomePage.css';

const HomePage = () => {
    return (
    <div className="App">
        <header className="App-header">
            <h1 className="title">MusicifyTube</h1>
        </header>
        <div className="search">
            <Search />
        </div>
    </div>
    );
}

export default HomePage;
