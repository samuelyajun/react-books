import React, {Component} from 'react';
import $ from "jquery";
import _ from 'lodash';


class BookServices extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        };
        this.getBooks = this.getBooks.bind(this);
    }

    getBooks() {
        $.ajax({
            url : "../../src/jsons/books.json" ,
            dataType : 'json',
            success : (data) => {
                this.setState({
                    books : data
                });
            },
            error : (xhr, status, err) => {
                // console.log(err);
                console.error(url, status, err.toString());
            }
        });
        return {books: this.books};

    }

}

export default BookServices;

