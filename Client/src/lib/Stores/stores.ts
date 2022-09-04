import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const yeargroup = writable('');
export const advisory = writable('');
export const userInfo = writable('false');

userInfo.subscribe((val) => browser && sessionStorage.setItem('userInfo', val));
yeargroup.subscribe((val) => browser && sessionStorage.setItem('yeargroup', val));
advisory.subscribe((val) => browser && sessionStorage.setItem('advisory', val));

