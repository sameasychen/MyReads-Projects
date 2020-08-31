import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class SearchPage extends React.Component {
  state = {
    query: "",
    books: [],

  }

  changeQuery =(event) =>{
    const {name, value} =event.target;
    this.setState({[name]:value})
  }

  updateSearch=()=>{

    BooksAPI.search(this.state.query)
      .then(response => {
        let newList =[];
        if(response.length){
          newList.push(response);
        }
        
        let newL = response;
        this.setState({books: newList});
      }
      )

  }


  render() {

    console.log(this.state.query);
    //console.log(this.state.books);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text" 
              placeholder="Search by title or author"
              onChange= {this.changeQuery}
              value={this.state.query}
              name="query"
              />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

          {this.state.books.map((book) =>
              <li>
                <Book book={book} onChangeShelf={this.props.onChangeShelf}/>
              </li>

            )}

          </ol>
        </div>
      </div>
    )
  }

}

export default SearchPage