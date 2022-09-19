<script lang="ts">
	import { Chasing } from 'svelte-loading-spinners';
	import { yeargroup, advisory, userInfo } from '$lib/Stores/stores';
	import { weeks, getWeek, convertDateToNearestString } from '$lib/Lookup/weeklookup';
	import { getWeekYearGroupSchedule, getDayYearGroupSchedule } from '$lib/schedule';
	import type { Schedule } from '$lib/schedule';
	import { onMount } from 'svelte';
	import { xlink_attr } from 'svelte/internal';
	let w: number; //for repsonsive

	// Parse todays data into a number array
	const d = new Date();
	let year = d.getUTCFullYear();
	let month = d.getUTCMonth() + 1;
	let day = d.getUTCDate();
	let date = [day, month, year];

	// Convert that to the nearst week day string ([1,2,22] -> "01-04-22")
	let today = convertDateToNearestString(date);

	// Init types with built in type error checking
	let weekdates: string[] | undefined = getWeek(date);
	let days: Schedule[] | undefined = [];
	let tod: Schedule | undefined;

	// $: make the function run whenever the var $userInfo changes (meaning that the user is logged in)
	$: if ($userInfo == 'true') {
		days = getWeekYearGroupSchedule($yeargroup, weekdates); //gets this whole weeks schedule
		tod = getDayYearGroupSchedule($yeargroup, today); //gets the days schedle
	}
</script>

<style>
	.thing {
		margin: 1rem;
	}
	h1 {
		word-wrap: break-word;
	}

	.day {
		text-align: center;
		background-color: #e6931d;
		padding: 0.5em;
		border-radius: 0.5em;
		will-change: filter;
		margin: auto;
		margin-top: 5vh;
		margin-bottom: 2vh;
		font-weight: 500;
		width: 15vw;
		color: white;
		transition: all ease-in-out 200ms;
	}
	:global(body.light) .day:hover {
		filter: drop-shadow(0 0 1em #777777);
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
	}

	.event {
		background-color: #4e4e4e;
		padding: 0.5em;
		border-radius: 0.5em;
		justify-content: center;
		align-items: center;
		margin: auto;
		height: 50vh;
		box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
		color: white;
		width: 15vw;
		will-change: filter;
		transition: all ease-in-out 500ms;
	}
	:global(body.light) .event {
		background-color: #f0f0f0;
		color: black;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
	}

	.event:hover {
		transition: all ease-in-out 200ms;
		filter: drop-shadow(0 0 1em #ffffff);
	}
	:global(body.light) .event:hover {
		transition: all ease-in-out 200ms;
		filter: drop-shadow(0 0 1em #777777);
	}
	.content {
		display: flex;
		margin: auto;
		justify-content: center;
		flex-direction: row;
	}
	@media (max-width: 750px) {
		.thing {
			width: fit-content;
			margin-top: 0vh;
		}
		.day {
			margin-top: 0vh;
			width: 70vw;
		}
		.event {
			width: 70vw;
		}
	}
</style>

<div class="content" bind:clientWidth={w}>
	{#if w > 750}
		{#if $userInfo != 'true'}
			<div class="thing">
				<h1 class="day">
					<div class="m-auto p-1 flex justify-center content-center">
						<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
					</div>
				</h1>
				<div class="event flex">
					<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
				</div>
			</div>
			<div class="thing">
				<h1 class="day">
					<div class="m-auto p-1 flex justify-center content-center">
						<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
					</div>
				</h1>
				<div class="event flex">
					<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
				</div>
			</div>
			<div class="thing">
				<h1 class="day">
					<div class="m-auto p-1 flex justify-center content-center">
						<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
					</div>
				</h1>
				<div class="event flex">
					<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
				</div>
			</div>
			<div class="thing">
				<h1 class="day">
					<div class="m-auto p-1 flex justify-center content-center">
						<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
					</div>
				</h1>
				<div class="event flex">
					<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
				</div>
			</div>
			<div class="thing">
				<h1 class="day">
					<div class="m-auto p-1 flex justify-center content-center">
						<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
					</div>
				</h1>
				<div class="event flex">
					<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
				</div>
			</div>
		{:else if $userInfo == 'true'}
			{#each days as z}
				<div class="thing">
					<h1 class="day">
						{z.Day}
						<br />
						{z.Time}
					</h1>

					<div class="event text-wrap">
						<h1 class="text-center">
							<strong>{z.Activity}</strong>
						</h1>
						<br />
						<h1>
							<strong>Location:</strong>
							{z.Location}
						</h1>
						<br />
						<h1>
							<strong>Notes:</strong>
							{z.Notes}
						</h1>
					</div>
				</div>
			{/each}
		{/if}
	{:else if $userInfo != 'true'}
		<div class="thing">
			<h1 class="day">
				<div class="m-auto p-1 flex justify-center content-center">
					<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
				</div>
			</h1>
			<div class="event flex">
				<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
			</div>
		</div>
	{:else}
		<div class="thing">
			<h1 class="day">
				{tod.Day}
				<br />
				{tod.Time}
			</h1>
			<div class="event">
				<h1 class="text-center">
					<strong>{tod.Activity}</strong>
				</h1>
				<br />
				<h1>
					<strong>Location</strong>
					:
					<br />
					{tod.Location}
				</h1>
				<br />
				<h1>
					<strong>Notes</strong>
					:
					<br />
					{tod.Notes}
				</h1>
			</div>
		</div>
	{/if}
</div>
