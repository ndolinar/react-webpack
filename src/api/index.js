import axios from 'axios';

export const getErrorMessage = error => {
	const { status } = error;
	let message;
	switch (status) {
		case 500:
			message = 'Internal Server Error';
			break;
		case 401:
			message = 'Bad credentials';
			break;
		default:
			message = `Something went wrong: ${status || 'No error status could be retrieved.'}`;
	}
	return message;
};

export const fetchJson = (endpoint, signal) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await fetch(`${ROOT_URL}${endpoint}`, {
				method: 'GET',
				signal: signal,
				headers: {
					'Content-Type': 'application/json',
					Authorization: getToken(),
				},
			});
			const res_1 = res.status === 404 ? undefined : res.ok ? res : reject(res);
			const res_2 = await (res_1 ? res_1.json() : undefined);
			return resolve(res_2);
		} catch (err) {
			return reject(err);
		}
	});
};
