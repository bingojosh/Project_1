import React from 'react';
import './HomePage.css';

class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            search: "Didn't work"
        };
    }

    onSearch = (newSearch) => {
        this.setState({
            search: newSearch
        })
    }




    render(){   
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="title">MusicifyTube</h1>
                </header>
                <div className="search">
                    <div className="searchInnard">
                        <a href="/main" className="btn btn-primary">Let's show off some <strong>swag</strong></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
