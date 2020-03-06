import React from 'react';
import style from './Search.css';
import SearchResult from '../SearchResult';

export class Search extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value:""
        };
    }
    handleChange(event){
        let value = event.target.value;
        this.setState({value});
        this.props.performSearch(value);
    }
    handleSubmit(event){
        event.preventDefault();
    }
    render(){
        return(
            <div className = {style.searchBox}>
                <h1>The Guardian Search App</h1>
                <form submit = {this.handleSubmit}>
                    <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    />
                </form>
                <div>
                    <h1>
                    {this.props.articles && this.props.articles.map((r,index) => {
                        return <SearchResult key={index} result={r} />
                    })}
                    </h1>
                </div>
            </div>

        );
    }
}
export default Search;