import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import PropTypes from 'prop-types'

class CurrentlyReading extends React.Component {
  state = {


  }

  filterCurrentlyReading(bookshelf) {
    return bookshelf.shelf === "currentlyReading"
  }

  render() {

    const CurrentlyReadingBooks = this.props.books.filter(this.filterCurrentlyReading);


    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">



            {CurrentlyReadingBooks.map((book) =>
              <li key={book.id}>
                <Book book={book} onChangeShelf={this.props.onChangeShelf}/>
              </li>

            )}

          </ol>
        </div>
      </div>
    )
  }

}

CurrentlyReading.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
};

export default CurrentlyReading