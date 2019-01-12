import React, { Component } from 'react';
import Search from '../Search/Search';
import Content from '../Content/Content';
import {Lyrics} from '../Lyrics/Lyrics'
import './MainPage.css';

class HomePage extends React.Component{

    queryCallback = (query) => (
        query
    )

    render(){    
        return (
            <div className="container d-flex flex-column align-items-start">
                <div className="searchbar">
                    <div className="search">
                        <Search queryCaller={this.queryCallback} />
                    </div>
                </div>
                <div className="body d-flex flex-row">
                    <div className="column d-flex flex-column" id="left">
                        <Content />
                    </div>
                    <div className="column justify-self-end" id="right">
                        <div className="lyrics">
                            <Lyrics />
                        </div>
                    </div>
                </div>
            </div>
            );
        }
}

export default HomePage;