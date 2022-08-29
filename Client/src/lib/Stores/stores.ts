import { writable } from 'svelte/store';
if (typeof window !== 'undefined') {
	var storedYearGroup = localStorage.getItem('Yeargroup');
	var storedAdvisory = localStorage.getItem('Advisory');
	var storedUserInfo: boolean = localStorage.getItem('UserInfo');
}
if (typeof window !== 'undefined') {
	yeargroup.subscribe((value) => {
		localStorage.setItem('Yeargroup', value);
	});
	advisory.subscribe((value) => {
		localStorage.setItem('Advisory', value);
	});
	userInfo.subscribe((value) => {
		localStorage.setItem('Userinfo', value);
	});
}
export const yeargroup = writable(storedYearGroup);
export const advisory = writable(storedAdvisory);
export const userInfo = writable(storedUserInfo);
