import Y13 from '$lib/Data/YearGroups/Y13.json';
import { compute_slots } from 'svelte/internal';

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
}

export function getDayYearGroupSchedule(year:string, date:string){
	if (year == '13') {
		let today: Schedule = parseScheduleDay(Y13, date)
		console.log(today)
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
