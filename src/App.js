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
    newBook: true,
  }

  componentDidMount() {
    if (this.state.newBook) {
      this.refreshAllBooks();
    }

  }

  refreshAllBooks=()=>{
    BooksAPI.getAll()
    .then((books) => { this.setState(() => ({
       books: books,
       newBook: false,
      }));
     })

  }

  bookAdded =() => {
    this.setState({newBook: true});
  }


  changeShelf=(book, shelf)=>{


    
    BooksAPI.update(book,shelf)
    .then(
      response => {
        let newList = this.state.books.slice(0);
  
        const books = newList.filter(listBook => listBook.id === book.id);
        if (books.length){
          books[0].shelf=shelf;

        }
        else{
          book.shelf=shelf;
          newList.push(book);
          
        }
        this.setState({books:newList})
      }

    )
  }

  render() {

    return (
      <div className="app">

        <Route path='/search' render={() => (<SearchPage books={this.state.books} onChangeShelf={this.changeShelf}/>)}/>

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
