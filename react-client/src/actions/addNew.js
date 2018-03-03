import axios from 'axios';

export function addNew(event){
	return function(dispatch){
		axios.post('/newarticle', event)
		.then((response) => {
			dispatch({
				type: "NEW_ARTICLE",
				payload: response.data
			})
		})
		.catch((error) => {
			console.log(error);
		})
	}
}