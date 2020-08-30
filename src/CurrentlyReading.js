import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import PropTypes from 'prop-types'

class CurrentlyReading extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  }

  filterCurrentlyReading(bookshelf){
      return bookshelf.shelf==="currentlyReading"
    }

  render() {

    const CurrentlyReadingBooks = this.props.books.filter(this.filterCurrentlyReading);


    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

          {CurrentlyReadingBooks.map((book) =>
              <li>
                <Book authors={book.authors} title={book.title} bgPic={book.imageLinks.thumbnail} shelf={book.shelf}/>
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
};

export default CurrentlyReading