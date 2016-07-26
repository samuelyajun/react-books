import React, {Component} from 'react';
import BookList from './booklist';
///import books from '../jsons/books.json';

class App extends Component {
    constructor(props) {
        super(props);

       

        this.state = {
            books: [
                {
                    "id": 1,
                    "title": "title1",
                    "author": "author1",
                    "publication": "publication year 1",
                    "genre": "genre1",
                    "links": "link1"
                },
                {
                    "id": 2,
                    "title": "title2",
                    "author": "author1",
                    "publication": "publication year 1",
                    "genre": "genre1",
                    "links": "link1"
                }
            ]
        };
}

    render() {
        //var books=require('../jsons/books.json');
        



        return (
            <div>
                <BookList books={this.state.books}/>
            </div>
        );
    }
}

export default App;