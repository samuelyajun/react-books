import React, {Component} from 'react';
import BookList from './booklist/booklist'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        
        };
}

    render() {
        return (
            <div>
                <BookList />
            </div>
        );
    }
}

export default App;