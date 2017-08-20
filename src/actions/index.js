import * as ReadableAPI from '../utils/api'

// http://redux.js.org/docs/advanced/AsyncActions.html
// export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'

export const FETCH_POSTS = 'FETCH_POSTS'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'

// I will be using the API functions I set up in utils/api.js
// export function fetchCategories( categories ) {
//   return {
//     type: FETCH_CATEGORIES,
//     categories
//   }
// }
export const fetchCategories = () => dispatch => {
		dispatch(requestCategories())
		return ReadableAPI.getCategories()
				.then(res => res.json())
				.then(json => dispatch(receiveCategories(json)))
}

export const requestCategories = () => ({
		type: REQUEST_CATEGORIES,
})

export const receiveCategories = (json) => ({
		type: RECEIVE_CATEGORIES,
		categories: json.categories.map(category => category.name)
})

export function fetchPosts( posts ) {
	return {
		type: FETCH_POSTS,
		posts
	}
}
