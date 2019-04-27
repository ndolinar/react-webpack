import actions from '../actions';

const initialState = {
	data: undefined,
	loading: false,
	error: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case actions.FETCH_DATA_REQUEST: {
			return {
				...state,
				error: false,
				loading: true,
			};
		}
		case actions.FETCH_DATA_SUCCESS: {
			return {
				...state,
				data: payload,
				error: false,
				loading: false,
			};
		}
		case actions.FETCH_DATA_FAILURE: {
			return {
				...state,
				error: true,
				loading: false,
				data: undefined,
			};
		}
		default:
			return state;
	}
};

export default rootReducer;
