import axios from 'axios';

export function getArticles(){
		// this.props.dispatch({type: 'ARTICLES'})
		return function(dispatch){
			axios.get('/articles')
			.then((response) => {
					dispatch({
						type: 'ARTICLES',
						payload: response.data,
					})
				})
			.catch((error) => {
				console.log(error)
			})
		}
	}