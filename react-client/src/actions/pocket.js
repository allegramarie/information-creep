import axios from 'axios';
import formData from 'form-data';

function confirmUser(userToken){
	console.log('Within confirm User')
	console.log(userToken)
	const url = `https://getpocket.com/auth/authorize?request_token=${userToken}&redirect_uri=http://localhost:4000/`
	window.open(url)
	dispatch({ 
		type: 'POCKET', 
		payload: userToken
	});
}

export function pocket(){
	return function(dispatch){
		var form = new formData();
		form.append('consumer_key', '75397-d93f3752b12144d153b8da97')
		form.append('redirect_uri', 'http://localhost:3000')
		form.append('Content-Type', 'application/json')
		form.append('Accept', 'application/json')
		axios.post('https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/oauth/request', form)
		.then((response) => {
			var code = response.data.substr(5);
			console.log("Response", response, response.data.substr(5))
			dispatch(confirmUser(code))
		})
		.catch((error) => {
			console.log("Error response:", error)
		})
	}
}

// export function pocket(){
// 	return function(dispatch){
// 		// var form = new formData();
// 		// form.append('consumer_key', '75397-d93f3752b12144d153b8da97')
// 		// form.append('redirect_uri', 'http://localhost:3000')
// 		// form.append('Content-Type', 'application/json')
// 		// form.append('Accept', 'application/json')
// 		jQuery.post('https://cors-anywhere.herokuapp.com/https://getpocket.com/v3/oauth/request', {'consumer_key': '75397-d93f3752b12144d153b8da97',
// 		'redirect_uri': 'http://localhost:3000','Content-Type': 'application/x-www-form-urlencoded'},
// 		function(response) {
// 			code = response.substr(5);
// 			console.log("Response", response.substr(5))
// 			)
// 		.success(function (code) {
// 				dispatch(confirmUser(code))
// 			}
// 		})
// 		// .then(code => dispatch(confirmUser(code)))
// 		.fail(function(error) {
// 			console.log("Error response:", error)
// 		})
// 	}
// }