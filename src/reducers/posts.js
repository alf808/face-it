import { FETCH_POSTS } from '../actions'

const initialState = {
	items: []
}

export function posts(state=initialState, action) {
	switch(action.type) {
		case FETCH_POSTS:
			return { ...state, items: action.posts }
		default:
			return state
	}
}
