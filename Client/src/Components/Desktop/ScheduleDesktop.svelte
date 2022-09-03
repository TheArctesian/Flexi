<script lang="ts">
	import { Chasing } from 'svelte-loading-spinners';
	import { yeargroup, advisory, userInfo } from '$lib/Stores/stores';
	import data from '$lib/schedule.json';
	import { weeks, getWeek } from '$lib/weeklookup';
	console.log(weeks[0]);
	let w: number;
	const d = new Date();
	let year = d.getUTCFullYear();
	let month = d.getUTCMonth() + 1;
	let day = d.getUTCDate();
	// let date = [day, month, year];
	let date = [10, 9, 2022];
	let weekDates: string[] | undefined = getWeek(date);
	console.log('Week Dates' + weekDates);
	let daydata: any;
	for (let i = 0; i < data.length; i++) {
		if (data[i].dayint == day) {
			daydata = data[i];
		}
		console.log('Year group', $yeargroup);

		console.log(data[i] + 'should not be undified');
	}
	function handClick() {
		alert($userInfo);
		console.log('asjkdaksjdk');
	}
</script>

<div class="content" bind:clientWidth={w}>
	{#if w > 750}
		<div class="thing">
			<h1 class="day">
				Monday
				<br />10:45-11:35
			</h1>
			{#if $userInfo == false}
				<button>
					<div class="event flex">
						<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
					</div>
				</button>
			{:else}
				<div class="event">
					<h1><strong>Event</strong>: Time Managment Meeting</h1>
					<br />
					<h1><strong>Location</strong>: Lower Gym</h1>
					<br />
					<h1><strong>Notes</strong>: Bring Pen</h1>
				</div>
			{/if}
		</div>
		<div class="thing">
			<h1 class="day">
				Tuesday
				<br />10:45-11:35
			</h1>
			{#if $userInfo == false}
				<button>
					<div class="event flex">
						<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
					</div>
				</button>
			{:else}
				<div class="event">
					<h1><strong>Event</strong>: UC Meeting</h1>
					<br />
					<h1><strong>Location</strong>: Auditorium</h1>
					<br />
					<h1><strong>Notes</strong>: Bring a device</h1>
				</div>
			{/if}
		</div>
		<div class="thing">
			<h1 class="day">
				Wednesday
				<br />10:35-11:45
			</h1>
			{#if $userInfo == false}
				<button>
					<div class="event flex">
						<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
					</div>
				</button>
			{:else}
				<div class="event">
					<h1><strong>Event</strong>: Advisory 13B1 & Flexi</h1>
					<br />
					<h1><strong>Location</strong>: 513</h1>
					<br />
					<h1><strong>Notes</strong>: <a class="text-green-500" href="/rooms"><u>Rooms</u></a></h1>
				</div>
			{/if}
		</div>
		<div class="thing">
			<h1 class="day">
				Thursday
				<br />10:45-11:35
			</h1>
			{#if $userInfo == false}
				<button>
					<div class="event flex">
						<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
					</div>
				</button>
			{:else}
				<div class="event">
					<h1><strong>Event</strong>: Assembley</h1>
					<br />
					<h1><strong>Location</strong>: Auditorium</h1>
					<br />
					<h1><strong>Notes</strong>:</h1>
				</div>
			{/if}
		</div>
		<div class="thing">
			<h1 class="day">
				Friday
				<br />10:35-11:45
			</h1>
			{#if $userInfo == false}
				<button>
					<div class="event flex">
						<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
					</div>
				</button>
			{:else}
				<div class="event">
					<h1><strong>Event</strong>: Advisory 13B1 & Flexi</h1>
					<br />
					<h1><strong>Location</strong>: 513</h1>
					<br />
					<h1><strong>Notes</strong>: <a class="text-green-500" href="/rooms"><u>Rooms</u></a></h1>
				</div>
			{/if}
		</div>
	{:else}
		<div class="thing">
			<h1 class="day">
				Monday
				<br />10:45-11:35
			</h1>
			{#if $userInfo == false}
				<button>
					<div class="event flex">
						<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
					</div>
				</button>
			{:else}
				<div class="event">
					<h1><strong>Event</strong>: Time Managment Meeting</h1>
					<br />
					<h1><strong>Location</strong>: Lower Gym</h1>
					<br />
					<h1><strong>Notes</strong>: Bring Pen</h1>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.thing {
		margin: 1rem;
	}
	h1 {
		color: white;
	}
	.day {
		text-align: center;
		background-color: #e6931d;
		padding: 0.5em;
		border-radius: 0.5em;
		margin: auto;
		margin-top: 5vh;
		margin-bottom: 2vh;
		font-weight: 500;
		width: 15vw;
		color: white;
		transition: all ease-in-out 200ms;
	}

	.day:hover {
		background-color: #e6921dab;
	}
	.event {
		background-color: #4e4e4e;
		padding: 0.5em;
		border-radius: 0.5em;
		justify-content: center;
		align-items: center;
		margin: auto;
		height: 50vh;
		width: 15vw;
		will-change: filter;
		transition: all ease-in-out 500ms;
	}

	.event:hover {
		transition: all ease-in-out 200ms;
		filter: drop-shadow(0 0 1em #ffffff);
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
