import { select, take, put, call, takeLatest, all } from 'redux-saga/effects';
// import API from '../api';

function* watchAndLog() {
	while (true) {
		const action = yield take('*');
		const state = yield select();
		console.group('Logging:');
		console.log('action: ', action);
		console.log('state: ', state);
		console.groupEnd();
	}
}

function* rootSaga() {
	yield all([watchAndLog()]);
}

export default rootSaga;
