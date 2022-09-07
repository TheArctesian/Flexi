import Y13 from '$lib/Data/YearGroups/Y13.json';

export type Schedule = {
	Date: string;
	Time: string;
	Day: string;
	Activity: string;
	Location: string;
	Notes: string;
};

export function getWeekYearGroupSchedule(year: string, dates: string[]) {
	if (year == '13') {
		let Schedule: Schedule[] = parseSchedule(Y13, dates);
		return Schedule;
	}
	else {
		alert("Years apart from Y13 are not yet supported")
	}	
    if (year == '12') {
		let Schedule: Schedule[] = parseSchedule(Y12, dates);
		return Schedule;
	}
	else {
		alert("Years apart from Y12 are not yet supported")
	}
    if (year == '11') {
		let Schedule: Schedule[] = parseSchedule(Y11, dates);
		return Schedule;
	}
	else {
		alert("Years apart from Y11 are not yet supported")
	}
    if (year == '10') {
		let Schedule: Schedule[] = parseSchedule(Y10, dates);
		return Schedule;
	}
	else {
		alert("Years apart from Y10 are not yet supported")
	}
    if (year == '9') {
		let Schedule: Schedule[] = parseSchedule(Y9, dates);
		return Schedule;
	}
	else {
		alert("Years apart from Y9 are not yet supported")
	}
    if (year == '8') {
		let Schedule: Schedule[] = parseSchedule(Y8, dates);
		return Schedule;
	}
	else {
		alert("Years apart from Y8 are not yet supported")
	}
    if (year == '7') {
		let Schedule: Schedule[] = parseSchedule(Y7, dates);
		return Schedule;
	}
	else {
		alert("Years apart from Y7 are not yet supported")
	}
}

export function getDayYearGroupSchedule(year:string, date:string){
	if (year == '13') {
		let today: Schedule = parseScheduleDay(Y13, date)
		return today;
	}
    if (year == '12') {
		let today: Schedule = parseScheduleDay(Y12, date)
		return today;
	}
    if (year == '11') {
		let today: Schedule = parseScheduleDay(Y11, date)
		return today;
	}
    if (year == '10') {
		let today: Schedule = parseScheduleDay(Y10, date)
		return today;
	}
    if (year == '9') {
		let today: Schedule = parseScheduleDay(Y9, date)
		return today;
	}
    if (year == '8') {
		let today: Schedule = parseScheduleDay(Y8, date)
		return today;
	}
    if (year == '7') {
		let today: Schedule = parseScheduleDay(Y7, date)
		return today;
	}
}

function parseScheduleDay(data: Schedule[], date: string){
	let today: Schedule;
	for (let value in data) {
		if(data[value].Date == date){
			today = data[value]		
			return today;
		}
	}
}
function parseSchedule(data: Schedule[], dates: string[]) {
	let Schedule: Schedule[] = [];
	for (let value in data) {
		if (dates.includes(data[value].Date)) {
			Schedule.push(data[value]);
		}
	}
	return Schedule;
}
