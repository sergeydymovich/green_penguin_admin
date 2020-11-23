import axios from "axios";
const API_BASE = "http://localhost:5000";

const get = (path) => (
	axios({
		headers: {
			"Content-Type": "application/json",
		},
		method: "get",
		url: API_BASE + path,
	})
);

const post = (path, body) => (
	axios({
		headers: {
			"Content-Type": "application/json",
		},
		method: "post",
		url: API_BASE + path,
		data: body ? JSON.stringify(body) : undefined,
	})
);

const put = (path, body) => (
	axios({
		headers: {
			"Content-Type": "application/json",
		},
		method: "put",
		url: API_BASE + path,
		data: body ? JSON.stringify(body) : undefined,
	})
);

const del = (path, body) => (
	axios({
		headers: {
			"Content-Type": "application/json",
		},
		method: "delete",
		url: API_BASE + path,
		data: body ? JSON.stringify(body) : undefined,
	})
);

export default {
	GET: get,
	POST: post,
	DELETE: del,
	PUT: put,
};
