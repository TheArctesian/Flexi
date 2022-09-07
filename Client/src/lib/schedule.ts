import Y13 from '$lib/Data/YearGroups/Y13.json';
// Globally for all the commented out lines it is because I have not been given
// The data yet

// The 'class' for java people or enum or struct for more knowledged people
export type Schedule = {
	Date: string;
	Time: string;
	Day: string;
	Activity: string;
	Location: string;
	Notes: string;
};

// Global function that calls on other funcs inside this program
export function getWeekYearGroupSchedule(year: string, dates: string[]) {
	if (year == '13') {
		let Schedule: Schedule[] = parseSchedule(Y13, dates);
		return Schedule;
	} else {
		alert('Years apart from Y13 are not yet supported');
	}
	// if (year == '12') {
	// 	let Schedule: Schedule[] = parseSchedule(Y12, dates);
	// 	return Schedule;
	// } else {
	// 	alert('Years apart from Y12 are not yet supported');
	// }
	// if (year == '11') {
	// 	let Schedule: Schedule[] = parseSchedule(Y11, dates);
	// 	return Schedule;
	// } else {
	// 	alert('Years apart from Y11 are not yet supported');
	// }
	// if (year == '10') {
	// 	let Schedule: Schedule[] = parseSchedule(Y10, dates);
	// 	return Schedule;
	// } else {
	// 	alert('Years apart from Y10 are not yet supported');
	// }
	// if (year == '9') {
	// 	let Schedule: Schedule[] = parseSchedule(Y9, dates);
	// 	return Schedule;
	// } else {
	// 	alert('Years apart from Y9 are not yet supported');
	// }
	// if (year == '8') {
	// 	let Schedule: Schedule[] = parseSchedule(Y8, dates);
	// 	return Schedule;
	// } else {
	// 	alert('Years apart from Y8 are not yet supported');
	// }
	// if (year == '7') {
	// 	let Schedule: Schedule[] = parseSchedule(Y7, dates);
	// 	return Schedule;
	// } else {
	// 	alert('Years apart from Y7 are not yet supported');
	// }
}

// For single day phone app
export function getDayYearGroupSchedule(year: string, date: string) {
	if (year == '13') {
		let today: Schedule | undefined = parseScheduleDay(Y13, date);
		return today;
	}
	// if (year == '12') {
	// 	let today: Schedule | undefined = parseScheduleDay(Y12, date);
	// 	return today;
	// }
	// if (year == '11') {
	// 	let today: Schedule | undefined = parseScheduleDay(Y11, date);
	// 	return today;
	// }
	// if (year == '10') {
	// 	let today: Schedule | undefined = parseScheduleDay(Y10, date);
	// 	return today;
	// }
	// if (year == '9') {
	// 	let today: Schedule | undefined = parseScheduleDay(Y9, date);
	// 	return today;
	// }
	// if (year == '8') {
	// 	let today: Schedule | undefined = parseScheduleDay(Y8, date);
	// 	return today;
	// }
	// if (year == '7') {
	// 	let today: Schedule | undefined = parseScheduleDay(Y7, date);
	// 	return today;
	// }
}

function parseScheduleDay(data: Schedule[], date: string) {
	let today: Schedule;
	for (let value in data) {
		// Finds todays data and set that object as the day
		if (data[value].Date == date) {
			today = data[value];
			return today;
		}
	}
}
function parseSchedule(data: Schedule[], dates: string[]) {
	//Takes in an array of the weeks dates as well as the JSON file of the entire schedule
	let Schedule: Schedule[] = [];
	for (let value in data) {
		if (dates.includes(data[value].Date)) {
			// Finds the day and pushes the value to and array of the weeks schedules
			Schedule.push(data[value]);
		}
	}
	return Schedule;
}
