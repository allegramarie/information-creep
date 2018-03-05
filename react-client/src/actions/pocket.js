import axios from 'axios';

function confirmUser(userToken){
	const url = 'https://getpocket.com/auth/authorize?request_token=$(userToken)&redirect_uri=articles'
	window.open(url)
	return { type: 'LOGGING_IN' };
}

export function pocket(){
	return function(dispatch){
		axios.post('https://getpocket.com/v3/oauth/request', {
			params: {
				consumer_key: 75397-d93f3752b12144d153b8da97,
				redirect_uri: articles
			}
		})
		.then((response) => {
			code = response.data.code;
		})
		.then(code => dispatch(confirmUser(code)))
		.catch((error) => {
			console.log(error)
		})
	}
}