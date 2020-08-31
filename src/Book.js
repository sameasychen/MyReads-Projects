import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import PropTypes from 'prop-types'

class Book extends React.Component {
    state = {
        // thebook: null,
        
    }

    // componentDidMount(){
    //     BooksAPI.get(this.props.match.params.id)
    //     .then(resp => {
    //       this.setState({ book: resp });
    //     })
    // }

    setShelf(target) {
    
        this.props.onChangeShelf(this.props.book, target);

    }


    render() {
      
        var bgPic = this.props.book.imageLinks.thumbnail;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: "url(" + bgPic + ")",
                    }}></div>
                    <div className="book-shelf-changer">
                        <select id="shelfselect"  onChange={(event)=>this.setShelf(event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read" selected>Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }

}

Book.propTypes = {

    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
};

export default Book