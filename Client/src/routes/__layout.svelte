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

	// API end points
	const scheduleEndPoint = 'http://127.0.0.1:5000/YearGroups/Y13';
	const AdvisoryEndPoint = 'http://127.0.0.1:5000/Advisory';
	const TeachersEndPoint = 'http://127.0.0.1:5000/Teacher';

	let requestMethods = {
		method: 'GET',
		redirect: 'follow'
	};
	// Fetch data from flask
	async function request(url: string) {
		const res = await fetch(url, requestMethods);
		const json = await res.json();
		return json;
	}
	onMount(
		async () => {
			try {
				const ad = await request(AdvisoryEndPoint); // Now this will wait till it finished
				let AD: advis[] = ad;
				console.log(AD);
				advisoryRooms.set(AD);
				console.log(advisoryRooms);
			} catch (e) {
				console.log(e);
			}
		}
		//	const ScheduleRes = await fetch(scheduleEndPoint, requestMethods);
		//	const TeachersRes = await fetch(TeachersEndPoint, requestMethods);

		//		const AdvisoryData = await JSON.parse(AdvisoryRes.text());
		//		const ScheduleData = await ScheduleRes.json();
		//		const TeachersData = await TeachersRes.json();
		//		console.log(AdvisoryData);
		//		advisoryRooms.set(AdvisoryData);
	);
</script>

{#if $userInfo == 'true'}
	<slot />
	<Advisory />
	<!-- Show advisory at the end of each slide -->
{:else}
	<Popup />
	<slot />
{/if}

<style>
	:global(body) {
		background-color: #272727;
	}
	:global(body.light) {
		background-color: white;
	}
</style>
