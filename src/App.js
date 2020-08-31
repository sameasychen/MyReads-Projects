import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CurrentlyReading from './CurrentlyReading'
import WanttoRead from './WanttoRead'
import Read from './Read'

class App extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => { this.setState(() => ({ books })) })

  }


  changeShelf(book, shelf){

    let newList = this.state.books.slice(0);
    console.log("state" + newList);
    
    //BooksAPI.update(book,shelf);
    
    // .then(
    //   response => {
    //     let newList = this.state.books.slice(0);
    //     console.log("state" + newList);
    //     const books = newList.filter(listBook => listBook.id === book.id);
    //   }

    // )
  }

  render() {
    console.log("cur State:"+this.state.books)
    return (
      <div className="app">

        <Route path='/search' render={() => (<SearchPage />)}/>

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading books={this.state.books} onChangeShelf={this.changeShelf}/>
                <WanttoRead books={this.state.books} onChangeShelf={this.changeShelf}/>
                <Read books={this.state.books} onChangeShelf={this.changeShelf}/>
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

export default App
