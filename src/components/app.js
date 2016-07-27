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
            selectedBook: null
        };

        BookServices.getBooks = BookServices.getBooks.bind(this);
    }

    getAllBooksFromServer() {

            this.setState({books:BookServices.getBooks()}); 
 
    }

    componentDidMount() {
        this.getAllBooksFromServer();
        setInterval(this.getAllBooksFromServer.bind(this), this.props.pollInterval);
    }



    render() {
        
        return (
            <div>
                <h1>Books...</h1>
                <BookList books={this.state.books} />
               
            </div>
        );
    }
}

export default App;