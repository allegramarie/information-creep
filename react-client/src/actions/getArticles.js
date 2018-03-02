import axios from 'axios';

function getArticles(){
		console.log("inside get articles")
		// this.props.dispatch({type: 'ARTICLES'})
		return function(dispatch){
			console.log("Makes it inside dispatch")
			axios.get('/articles')
			.then((response) => 
				console.log("Getting articles from axios", response.data),
				dispatch({
					type: 'ARTICLES',
					payload: response,
				})
			)
			.catch((error) => {
				console.log(error)
			})
		}
	}

export default getArticles;