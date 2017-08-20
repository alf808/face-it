import { FETCH_COMMENTS } from '../actions'

const initialState = {
	items: []
}

export function comments(state=initialState, action) {
	switch(action.type) {
		case FETCH_COMMENTS:
			return { ...state, items: action.comments }
		default:
			return state
	}
}
