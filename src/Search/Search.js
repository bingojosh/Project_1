import React from 'react';
import './Search.css';

class Search extends React.Component{

    constructor(props){
        super();
        this.state = {
            search: "ass"
        };
    }

    onSearch(){
        this.props.handleClick(this.state.search);
        console.log(this.state.search)
    }

    onHandleChange(event){
        this.setState({
            search: event.target.value
        })
    }

    render(){
        return(
            <div className="container" id="searchContainer">
                <div id="search">
                    <input className="form-control border border-primary" onChange={event => this.onHandleChange(event)} id="search-q" type="text"/>
                    <button onClick={this.onSearch.bind(this)} className="btn btn-primary border border-primary" id="submit" ><i className="fas fa-search"></i></button>
                </div>
            </div>
        )
    }
}

export default Search;