import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import PropTypes from 'prop-types'

class SearchPage extends React.Component {
  state = {
    query: "",
    books: [],

  }

  queryTimer = null;

  changeQuery = (event) => {

    clearTimeout(this.queryTimer);
    const { name, value } = event.target;
    this.setState({ [name]: value });

    this.queryTimer = setTimeout(this.updateSearch, 200);
    console.log("query: " + this.state.query);
    console.log(this.state.books);
    console.log("Change Query");

  }

  updateSearch = () => {

    if (this.state.query === "") {
      this.setState({ books: [] });
      return;
    }
    console.log("Search");

    BooksAPI.search(this.state.query)
      .then(response => {

        if (response === undefined || response.error) {
          console.log("SearchAPI Error");
          response = [];
        }

        response = response.map((book) => {
          const bookInShelf = this.props.books.find(b => b.id === book.id);

          if (bookInShelf) {
            book.shelf = bookInShelf.shelf;
          }
          return book;
        }
        );

        this.setState({ books: response });

      }
      );


  }

  render() {

    // console.log("query: "+this.state.query);
    //console.log(this.state.books);

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.changeQuery}
              value={this.state.query}
              name="query"
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {this.state.books.map((book) =>
              <li key={book.id}>
                <Book book={book} onChangeShelf={this.props.onChangeShelf} />
              </li>

            )}

          </ol>
        </div>
      </div>
    )
  }

}

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default SearchPage