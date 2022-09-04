import Advisory from '$lib/Data/Advisory.json';
export type advis = {
	Advisory: string;
	Teacher: string;
	Room: string;
};

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
