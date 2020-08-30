import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WanttoRead from './WanttoRead'
import Read from './Read'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => { this.setState(() => ({ books })) })

  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">


        <Route path='/search' render={() => (<SearchPage />)}

        />


        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading books={this.state.books}/>
                <WanttoRead books={this.state.books}/>
                <Read books={this.state.books}/>
              </div>
            </div>

            <div className="open-search">
              <Link className="open-searchLink" to='/search'>Add a book</Link>
            </div>

          </div>

        )}
        />


      </div>
    )
  }
}

export default BooksApp
