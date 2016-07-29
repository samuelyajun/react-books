import React, {Component} from 'react';
import $ from "jquery";
import _ from 'lodash';
import BookList from './booklist';
import SearchBar from './SearchBar';
import BookServices from './services/bookServices.js';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            selectedBooks: null
        };
     this.searchBooks = this.searchBooks.bind(this);
    }

    getAllBooksFromServer() {
            var allBooks = BookServices.getAllBooks();
            this.setState({books: allBooks});  
    }

    componentDidMount() {
        this.getAllBooksFromServer();
    }

    searchBooks(query) {
        var foundBooks = BookServices.getFilteredBooks(query);
        this.setState({books: foundBooks}, function () {
            this.setState({books:foundBooks});
            return this.state.books;
        });
    }

    render() {
        
        return (
            <div>
                <h1>Books...</h1>`
                <SearchBar onSearchTermChange={this.searchBooks}  />
                <BookList books={this.state.books} />
               
            </div>
        );
    }
}

export default App;