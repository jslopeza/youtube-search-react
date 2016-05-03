import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import config from '../config';
import SearchBar from './components/search_bar';

class App extends Component {
	render() {
		return (
			<SearchBar />
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));