import React, {Component} from 'react';
import $ from "jquery";
import BookList from './booklist';

///import books from '../jsons/books.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [ ]
        };
    }

    getAllBooksFromServer() {
            $.ajax({
                url : "../../src/jsons/books.json" ,
                // url : "http://localhost:8080/src/jsons/books.json" ,
                dataType : 'json',
                // cache : false,
                success : (data) => {
                    console.log('data');
                    this.setState({
                        books : data
                    });
                },
                error : (xhr, status, err) => {
                    // console.log(err);
                    console.error(url, status, err.toString());
                }
            });
    }

    componentDidMount() {
        this.getAllBooksFromServer();
        setInterval(this.getAllBooksFromServer.bind(this), this.props.pollInterval);
    }

    render() {
        return (
            <div>
                <h1>Books</h1>
                <BookList books={this.state.books}/>
            </div>
        );
    }
}

export default App;