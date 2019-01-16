import React from 'react';
import './Search.css';

class Search extends React.Component{
    render(){
        return(
            <div className="container" id="searchContainer">
                <div id="search">
                    <input className="form-control border border-primary" id="search-q" type="text" placeholder=""/>
                    <a href="/main" className="btn btn-primary border border-primary" id="submit" role="button" ><i className="fas fa-search"></i></a>
                </div>
            </div>
        )
    }
}

export default Search;