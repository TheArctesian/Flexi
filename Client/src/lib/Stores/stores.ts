import { writable } from 'svelte/store';
if (typeof window !== 'undefined') {
	var storedYearGroup = localStorage.getItem('Yeargroup');
	var storedAdvisory = localStorage.getItem('Advisory');
	var storedUserInfo = localStorage.getItem('UserInfo');
}
if (typeof window !== 'undefined') {
	yeargroup.subscribe((value) => {
		localStorage.setItem('Yeargroup', value);
	});
	advisory.subscribe((value) => {
		localStorage.setItem('Advisory', value);
	});
	userInfo.subscribe((value) => {
		localStorage.setItem('Userinfo', value.toString());
	});
}
export const yeargroup = writable(storedYearGroup);
export const advisory = writable(storedAdvisory);
export const userInfo = writable(storedUserInfo);

