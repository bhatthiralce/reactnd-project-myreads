import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


class Book extends Component{
	
	state= {shelf:''}
	componentDidMount(){
		this.setState(()=>({shelf:this.props.book.shelf}))
	}
	handleChange=(event)=>{
		this.setState({shelf:event.target.value})
		this.props.updateShelf(this.props.book,event.target.value)

	}
		
	render(){
		console.log(book)
		const book = this.props.book
		return(
			<div className="book">
				<div className="book-top">
					{book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>}
					<div className="book-shelf-changer">
					  <select value={book.shelf} onChange={(event) => this.handleChange(event)}>
					    <option value="move" disabled>Move to...</option>
					    <option value="currentlyReading">Currently Reading</option>
					    <option value="wantToRead">Want to Read</option>
					    <option value="read">Read</option>
					    <option value="none">None</option>
					  </select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				{book.authors && <div className="book-authors">{book.authors.map((author)=>(<span key={author}>{author}</span>))}</div>}
			</div>
			)
	}
}

export default Book