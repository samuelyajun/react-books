import React, {Component} from 'react';

class SearchBar extends Component  {
	constructor(props) {
		super(props);
		this.state = {query: '' };
		this.onInputChange = this.onInputChange.bind(this);
	}
	render () {
		return(
			<div>
				<input
		          value={this.state.query}
		          placeholder="enter title, atuthor, publication, or genre..."
		          onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(query) {
	    this.setState({query});
	    this.props.onSearchTermChange(query);
  	}
} 

export default SearchBar;