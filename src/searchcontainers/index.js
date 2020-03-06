import React from 'react'
import ReactDom from 'react-dom';
import Search from '../components/Search';

export class SearchContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            articles :[]
        }
        this.performSearch = this.performSearch.bind(this)
    }
    performSearch(query){
        fetch(`http://localhost:3000/searchTerm=${query}`)
        .then(response => response.json())
        .then(data =>{
            this.setState({articles:data.response.results})
        })
    }
    render(){
        return(
            <Search>
                performSearch = {this.performSearch}
            </Search>
        )
    }
}
export default SearchContainer;