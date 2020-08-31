import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import PropTypes from 'prop-types'

class WanttoRead extends React.Component {
  state = {


  }

  filterWanttoRead(bookshelf){
    return bookshelf.shelf==="wantToRead"
  }

  render() {
    
    const WanttoReadBooks = this.props.books.filter(this.filterWanttoRead);

    
    return (

      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

          {WanttoReadBooks.map((book) =>
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

WanttoRead.propTypes = {
  books: PropTypes.array.isRequired,
};

export default WanttoRead