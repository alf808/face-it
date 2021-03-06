import { FETCH_CATEGORIES } from '../actions'

const initialState = {
	items: []
}

export function categories(state=initialState, action) {
	switch(action.type) {
		case FETCH_CATEGORIES:
			return { ...state, items: action.categories }
		default:
			return state
	}
}
