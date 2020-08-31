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

  changeQuery = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.updateSearch();
  }

  updateSearch = () => {

    console.log(this.state.query);

    if (this.state.query === "") {
      this.setState({ books: [] });
      return;
    }

      BooksAPI.search(this.state.query)
      .then(response => {
        //let newList =[];
        if (response.length === 0) {
          console.log("No matching.")
        } else if (response.length) {

          this.setState({ books: response });
        }

      })
  }

  render() {

    console.log(this.state.query);
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