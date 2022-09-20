// API end points
const scheduleEndPoint = 'http://127.0.0.1:5000/YearGroups/Y13';
const AdvisoryEndPoint = 'http://127.0.0.1:5000/Advisory';
const TeachersEndPoint = 'http://127.0.0.1:5000/Teacher';
let requestMethods = {
	// HTTP CONFIG
	method: 'GET',
	redirect: 'follow'
};
async function request(url: string) {
	const res = await fetch(url, requestMethods);
	const json = await res.json();
	return json;
}
