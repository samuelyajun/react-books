import React, {Component} from 'react';

class BookList extends Component {  
  render() {
    var bookNodes = this.props.books.map((book) => {
      return (
        <div key={book.id}>
          <li>
            {book.title}
          <div>
            Author: {book.author}
          </div> 
          <div>
            Publication Year: {book.publication}
          </div>
          <div>
            Genre: {book.genre}
          </div>
          <div>
            Links: {book.links}
          </div>
          </li>
        </div>
      );
    });

    return (
      <div>
          <ul>
            {bookNodes}
          </ul>
      </div>
    );
  }
}


export default BookList;