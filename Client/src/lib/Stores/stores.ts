/* 
For context svelte stores are a way to globally state manage meaning manage
the state of certain vars across pages. 

While normally this would be an attack vector for a simple app like this it 
does not matter as much. Also Richard Harris has built them pretty well so
it is not too bad. 

It is one of the major selling points of svelte over react as GSM is so 
much easier for devs then LSM or import a lib like redux to do 
*/

import { writable } from 'svelte/store';
import { browser } from '$app/env';
import type { advis } from '../advisory';
import type { teacher } from '..//Types/teacher';
import type { Schedule } from '../schedule';

// These initialize the
let advisRoomInit: advis[] = [];
let teacherListInit: teacher[] = [];
let ScheduleListInit: Schedule[] = [];

// Init data stores
export const advisoryRooms = writable(advisRoomInit);
export const teacherList = writable();
export const scheduleList = writable();

// User Values stores
export const yeargroup = writable('');
export const advisory = writable('');
export const userInfo = writable('false');

// Saving to browser local storage
// (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for more info
userInfo.subscribe((val) => browser && sessionStorage.setItem('userInfo', val));
yeargroup.subscribe((val) => browser && sessionStorage.setItem('yeargroup', val));
advisory.subscribe((val) => browser && sessionStorage.setItem('advisory', val));
