import Y13 from '$lib/Data/YearGroups/Y13.json';

export type Schedule = {
	Date: string;
	Day: string;
	Activity: string;
	Location: string;
	Notes: string;
};

export function getYearGroupSchedule(year: string, dates: string[]) {
	console.log(year + 'alert me');
	let Schedule: Schedule[];
	if (year == '13') {
		parseSchedule(Y13, dates);
	}
	return 'Working';
}

function parseSchedule(data: Schedule[], dates: string[]) {
	for (let [key, value] of Object.entries(data)) {
		console.log(key, value);
	}
	let Schedule: Schedule[];
}
