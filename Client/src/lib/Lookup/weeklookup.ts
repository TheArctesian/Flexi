export const weeks: string[][] = [
	['05-09-22', '06-09-22', '07-09-22', '08-09-22', '09-09-22'],
	['12-09-22', '13-09-22', '14-09-22', '15-09-22', '16-09-22'],
	['19-09-22', '20-09-22', '21-09-22', '22-09-22', '23-09-22'],
	['26-09-22', '27-09-22', '28-09-22', '29-09-22', '30-09-22'],
	['03-10-22', '04-10-22', '05-10-22', '06-10-22', '07-10-22'],
	['10-10-22', '11-10-22', '12-10-22', '13-10-22', '14-10-22'],
	['17-10-22', '18-10-22', '19-10-22', '20-10-22', '21-10-22'],
	['24-10-22', '25-10-22', '26-10-22', '27-10-22', '28-10-22'],
	['31-10-22', '01-11-22', '02-11-22', '03-11-22', '04-11-22'],
	['07-11-22', '08-11-22', '09-11-22', '10-11-22', '11-11-22'],
	['14-11-22', '15-11-22', '16-11-22', '17-11-22', '18-11-22'],
	['21-11-22', '22-11-22', '23-11-22', '24-11-22', '25-11-22'],
	['28-11-22', '29-11-22', '30-11-22', '01-12-22', '01-12-22'],
	['05-12-22', '06-12-22', '07-12-22', '08-12-22', '09-12-22'],
	['12-12-22', '13-12-22', '14-12-22', '15-12-22', '16-12-22'],
	['19-12-22', '20-12-22', '21-12-22', '22-12-22', '23-12-22'],
	['26-12-22', '27-12-22', '28-12-22', '29-12-22', '30-12-22'],
	['02-01-23', '03-01-23', '04-01-23', '05-01-23', '06-01-23'],
	['09-01-23', '10-01-23', '11-01-23', '12-01-23', '13-01-23'],
	['16-01-23', '17-01-23', '18-01-23', '19-01-23', '20-01-23'],
	['23-01-23', '24-01-23', '25-01-23', '26-01-23', '27-01-23'],
	['30-01-23', '31-01-23', '01-02-23', '02-02-23', '03-02-23'],
	['06-02-23', '07-02-23', '08-02-23', '09-02-23', '10-02-23'],
	['13-02-23', '14-02-23', '15-02-23', '16-02-23', '17-02-23'],
	['20-02-23', '21-02-23', '22-02-23', '23-02-23', '24-02-23'],
	['27-02-23', '28-02-23', '01-03-23', '02-03-23', '03-03-23'],
	['06-03-23', '07-03-23', '08-03-23', '09-03-23', '10-03-23'],
	['13-03-23', '14-03-23', '15-03-23', '16-03-23', '17-03-23'],
	['20-03-23', '21-03-23', '22-03-23', '23-03-23', '24-03-23'],
	['27-03-23', '28-03-23', '29-03-23', '30-03-23', '31-03-23'],
	['03-04-23', '04-04-23', '05-04-23', '06-04-23', '07-04-23'],
	['10-04-23', '11-04-23', '12-04-23', '13-04-23', '14-04-23'],
	['17-04-23', '18-04-23', '19-04-23', '20-04-23', '21-04-23'],
	['24-04-23', '25-04-23', '26-04-23', '27-04-23', '28-04-23'],
	['01-05-23', '02-05-23', '03-05-23', '04-05-23', '05-05-23'],
	['08-05-23', '09-05-23', '10-05-23', '11-05-23', '12-05-23'],
	['15-05-23', '16-05-23', '17-05-23', '18-05-23', '19-05-23']
];

export function convertDateToString(date: number[]) {
	let dateString = '';
	for (let val in date) {
		if (date[val].toString().length == 1) {
			let temp = date[val].toString();
			temp = [0, temp].join().toString();
			temp = temp.replaceAll(',', '');
			temp += '-';
			dateString += temp;
		} else if (date[val].toString().length == 4) {
			let temp = date[val].toString();
			temp = temp.replace('20', '');
			temp += '-';
			dateString += temp;
		} else {
			let temp = date[val].toString();
			temp += '-';
			dateString += temp;
		}
	}
	let splitter = dateString.split('');
	if (splitter[splitter.length - 1] == '-') splitter.pop();
	dateString = splitter.join('');
	return dateString;
}

export function convertDateToNearestString(date: number[]) {
	let stringDate = convertDateToString(date);
	let res = searchForDate(stringDate);
	if (checkNull(res)) {
		return stringDate;
	}
	date[0] = date[0] + 1;
	stringDate = convertDateToString(date);
	res = searchForDate(stringDate);
	if (checkNull(res)) {
		return stringDate;
	}
	date[0] = date[0] - 2;
	stringDate = convertDateToString(date);
	res = searchForDate(stringDate);
	if (checkNull(res)) {
		return stringDate;
	}
}
function searchForDate(date: string) {
	for (let i in weeks) {
		for (let x = 0; x < 5; x++) {
			if (weeks[i][x] == date) {
				return weeks[i];
			}
		}
	}
}

function checkNull(res: string[] | undefined) {
	if (res != undefined) {
		return true;
	}
	return false;
}
export function getWeek(date: number[]) {
	let stringDate = convertDateToString(date);
	let res = searchForDate(stringDate);
	if (checkNull(res)) {
		return res;
	}
	date[0] = date[0] + 1;
	stringDate = convertDateToString(date);
	res = searchForDate(stringDate);
	if (checkNull(res)) {
		return res;
	}
	date[0] = date[0] - 2;
	stringDate = convertDateToString(date);
	res = searchForDate(stringDate);
	if (checkNull(res)) {
		return res;
	}
}
