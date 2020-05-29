import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import Book from './Book'
class BookSearch extends Component{

	updateQuery = (query) => {
			(this.props.updateQuery(query))
		}
	clearSearch = () => {this.updateQuery('')}
	render(){
		const query = this.props.query
		const books = this.props.books 
		console.log(books)
		return(
			<div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search"> Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" 
                value={query} onChange={(event) => this.updateQuery(event.target.value)} />
              </div>
              <button name="clear-search" className="clear-search" onClick={()=> this.clearSearch()}> Clear </button>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

              	{ (books.length>0) && (books.map((book)=>(
              		<li key={book.id}>
                    	<Book book={book} updateShelf={this.props.updateShelf} shelf={book.shelf}/>
                	</li>)
		        ))}
              </ol>
            </div>
          </div>)

	}
}

export default BookSearch