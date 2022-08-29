<script lang="ts">
	import { Chasing } from 'svelte-loading-spinners';
	import { yeargroup, advisory, userInfo } from '$lib/Stores/stores';
	import data from '$lib/schedule.json';
	let innerWidth: number;
	const d = new Date();
	let day = d.getDay();
	let daydata: any;
	for (let i = 0; i < data.length; i++) {
		if (data[i].dayint == day) {
			daydata = data[i];
		}
		console.log('Year group', $yeargroup);

		console.log(data[i][$yeargroup] + 'should not be undified');
	}
</script>

<svelte:window bind:innerWidth />
<div class="content">
	{#if innerWidth > 750}
		{#each data as day}
			<div class="thing">
				<h1 class="day">
					{day.day}
					<br />
					{day.time}
				</h1>
				{#if $userInfo == 'flase'}
					<button>
						<div class="event">
							<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
						</div>
					</button>
				{:else}
					<h1>Event: {day.Y7}</h1>
					<!-- <h1>Place: {d}</h1> -->
				{/if}
			</div>
		{/each}
	{:else}
		<div class="thing">
			<h1 class="day">
				{daydata.day}
				<br />
				{daydata.time}
			</h1>
			{#if $userInfo == 'false'}
				<div class="event">
					<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
				</div>
			{:else}
				<div class="event">
					<h1>{daydata.$yeargroup}</h1>
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	.thing {
		margin: 1rem;
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
		display: flex;
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
