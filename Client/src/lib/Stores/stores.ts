import { writable } from 'svelte/store';
import { browser } from '$app/env';
export const yeargroup = writable('');
export const advisory = writable('');
export const userInfo = writable('false');

yeargroup.subscribe((val) => browser && localStorage.setItem('yeargroup', val));
advisory.subscribe((val) => browser && localStorage.setItem('advisory', val));
userInfo.subscribe((val) => browser && localStorage.setItem('userInfo', val));
