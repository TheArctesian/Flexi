<script lang="ts">
	import { Chasing } from 'svelte-loading-spinners';
	let w;
</script>

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

<div class="content" bind:clientWidth={w}>
	{#if w >= 750}
		<div class="thing">
			<h1 class="day">
				Monday
				<br />
				10:45-11:35
			</h1>
			<button>
				<div class="event">
					<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
				</div>
			</button>
		</div>

		<div class="thing">
			<h1 class="day">
				Tuesday
				<br />
				10:45-11:35
			</h1>
			<div class="event">
				<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
			</div>
		</div>

		<div class="thing">
			<h1 class="day">
				Wednesday
				<br />
				10:35-11:45
			</h1>
			<div class="event">
				<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
			</div>
		</div>

		<div class="thing">
			<h1 class="day">
				Thursday
				<br />
				10:45-11:35
			</h1>
			<div class="event">
				<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
			</div>
		</div>
		<div class="thing">
			<h1 class="day">
				Friday
				<br />
				10:35-11:45
			</h1>
			<div class="event">
				<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
			</div>
		</div>
	{:else}
		<div class="thing">
			<h1 class="day">
				Friday
				<br />
				10:35-11:45
			</h1>
			<div class="event">
				<Chasing size="60" color="#e6931d" unit="px" duration="1s" />
			</div>
		</div>
	{/if}
</div>
