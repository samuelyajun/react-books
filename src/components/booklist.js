import React, {Component} from 'react';


const Booklist = ({books})=>{

  if (books.length<1) {
    return (<div>No books or still Searching...</div>);
  }
            
  const booklist = books.map((book) => {
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
      {booklist}
    </ul>
</div>
  );

}

export default Booklist;