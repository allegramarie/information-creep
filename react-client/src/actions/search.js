import axios from 'axios';

export function onSearch(term){
	console.log(`${term} was searched!`)
	return function(dispatch){
		axios.post('/search', {
		term: term
		})
		.then((response) => {
			dispatch({
				type: 'SEARCH',
				payload: response.data,
			})
		})
		.catch((error) => {
			console.log(error);
		})
	}
}