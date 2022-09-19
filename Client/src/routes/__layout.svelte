<script lang="ts">
	import '../app.css';
	import Popup from '../Components/Popup/popup.svelte';
	import {
		userInfo,
		advisory,
		yeargroup,
		advisoryRooms,
		teacherList,
		scheduleList
	} from '$lib/Stores/stores';
	import Advisory from '../Components/Items/Advisory.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import type { advis } from '$lib/advisory';
	import type { Schedule } from '$lib/schedule';
	import type { teacher } from '$lib/Types/teacher';

	// API end points
	const scheduleEndPoint = 'http://127.0.0.1:5000/YearGroups/Y13';
	const AdvisoryEndPoint = 'http://127.0.0.1:5000/Advisory';
	const TeachersEndPoint = 'http://127.0.0.1:5000/Teacher';

	let requestMethods = {
		// HTTP CONFIG
		method: 'GET',
		redirect: 'follow'
	};
	// Fetch data from flask
	async function request(url: string) {
		const res = await fetch(url, requestMethods);
		const json = await res.json();
		return json;
	}
	onMount(async () => {
		try {
			const ad = await request(AdvisoryEndPoint); // Now this will wait till it finished
			let AD: advis[] = ad; //Parse to obj array
			advisoryRooms.set(AD); //Set store value to obj array
		} catch (e) {
			console.log(e);
		}
		try {
			const td = await request(TeachersEndPoint); // Now this will wait till it finished
			let TD: teacher[] = td; //Parse to obj array
			teacherList.set(TD); //Set store value to obj array
		} catch (e) {
			console.log(e);
		}
		try {
			const sd = await request(scheduleEndPoint); // Now this will wait till it finished
			let SD: Schedule[] = sd;
			scheduleList.set(SD);
		} catch (e) {
			console.log(e);
		}
	});
</script>

<style>
	:global(body) {
		background-color: #272727;
	}
	:global(body.light) {
		background-color: rgb(237, 234, 234);
	}
</style>

{#if $userInfo == 'true'}
	<slot />
	<Advisory />
	<!-- Show advisory at the end of each slide -->
{:else}
	<Popup />
	<slot />
{/if}
