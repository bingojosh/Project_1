import React from 'react';
import './Search.css';

const Search = () =>{
    return(
        <div className="container">
            <form id="search-form">
                <input className="form-control border border-primary" id="search-q" type="text" placeholder=""/>
                <button className="btn btn-primary border border-primary" id="submit" type="submit"><i className="fas fa-search"></i></button>
            </form>
        </div>
    )
}

export default Search;