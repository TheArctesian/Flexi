import Advisory from '$lib/Data/Advisory.json';

// The 'class' for java people or enum or struct for more knowledged people
export type advis = {
	Advisory: string;
	Teacher: string;
	Room: string;
};

// Concatenate global stores when logged in to get real advisory list
export function getAdvisory(yeargroup: string, house: string) {
	let advis: string = '';
	advis += yeargroup;
	advis += house;
	for (let x in Advisory) {
		if (Advisory[x].Advisory == advis) {
			return Advisory[x];
		}
	}
}
