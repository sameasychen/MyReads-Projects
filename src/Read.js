import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import PropTypes from 'prop-types'

class Read extends React.Component {
  state = {


  }

  filterRead(bookshelf){
    return bookshelf.shelf==="read"
  }

  render() {

    const ReadBooks = this.props.books.filter(this.filterRead);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

          {ReadBooks.map((book) =>
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

Read.propTypes = {
  books: PropTypes.array.isRequired,
};

export default Read