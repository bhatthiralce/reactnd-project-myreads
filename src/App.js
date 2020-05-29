import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import BookList from './BookList'
import './App.css'
class BooksApp extends React.Component {
  state = {
    books:[],
    query : '',

  }


  componentDidMount(){
    BooksAPI.getAll().then((books)=>{this.setState(()=>({books}))})
  }
 
  updateQuery = (query) =>{
    if (query.trim() !== ''){
      BooksAPI.search(query.trim()).then(
      (books)=>{this.setState((currentState)=>({query: query, books: books.length >0 ? books : []}),console.log(books))})
    }
    else{
      this.setState((currentState)=>({query: '', books : []}))
    }

  }
  updateShelf= (book,shelf)=> {
    BooksAPI.update(book,shelf).then(()=>{this.setState((currentState)=>({books: currentState.books, query:''}),this.componentDidMount())})
  }
  render() {
    const books= this.state.books
    return (
      <div className="app">
        <Route exact path ='/' render={()=>(<BookList books={books} updateShelf={(book,shelf)=>{this.updateShelf(book,shelf)}}/>)}/>
        <Route path ='/search' render={({history})=>(<BookSearch 
         books={books} updateQuery={(query)=>this.updateQuery(query)}
         updateShelf={(book,shelf)=>{this.updateShelf(book,shelf)
          history.push('/')}}
         query={this.state.query}/>)} />

       
      </div>
    )
  }
}

export default BooksApp