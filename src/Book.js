import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import PropTypes from 'prop-types'

class Book extends React.Component {
    state = {


    }

    // setShelf(book) {
        
    //     let shelfSelect = document.getElementById("shelfselect").value;
    //     console.log(shelfSelect);
    //     if (shelfSelect === "read") {
    //         book.shelf = "read";
    //     }
    // }


    render() {

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: "url(" + this.props.bgPic + ")",
                    }}></div>
                    <div className="book-shelf-changer">
                        <select id="shelfselect" onChange={this.setShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }

}

Book.propTypes = {
    authors: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bgPic: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,

};

export default Book