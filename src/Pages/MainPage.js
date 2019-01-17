import React from 'react';
import Search from '../Search/Search';
import Content from '../Content/Content';
import {Lyrics} from '../Lyrics/Lyrics'
import './MainPage.css';

class MainPage extends React.Component{

    constructor(props){
        super();
        this.state = {
            search: ""
        }
    }

    onSearch(newSearch){
        this.setState({
            search: newSearch
        })
    }
    
    componentDidUpdate(){
        console.log(this.state.search)
    }

    render(){    
        return (
            <div className="container d-flex flex-column align-items-start">
                <div className="searchbar">
                    <div className="search">
                        <Search handleClick={this.onSearch.bind(this)}/>
                    </div>
                </div>
                <div className="body d-flex flex-row">
                    <div className="column d-flex flex-column" id="left">
                        <Content search={this.state.search}/>
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


export default MainPage;