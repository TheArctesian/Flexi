<script lang="ts">
	import { Chasing } from 'svelte-loading-spinners';
	console.log('hello desktop');
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
		width: 15vw;
		color: white;
	}

	.event {
		background-color: #f0f0f0;
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
		filter: drop-shadow(0 0 1em #e6931d);
	}
	.content {
		display: flex;
		margin: auto;
		justify-content: center;
		flex-direction: row;
	}
</style>

<div class="content">
	<div class="thing">
		<h1 class="day">Monday</h1>
		<button>
			<div class="event">
				<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
			</div>
		</button>
	</div>

	<div class="thing">
		<h1 class="day">Tuesday</h1>
		<div class="event">
			<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
		</div>
	</div>

	<div class="thing">
		<h1 class="day">Wednesday</h1>
		<div class="event">
			<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
		</div>
	</div>

	<div class="thing">
		<h1 class="day">Thursday</h1>
		<div class="event">
			<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
		</div>
	</div>
	<div class="thing">
		<h1 class="day">Friday</h1>
		<div class="event">
			<Chasing size="60" color="#9a0a27" unit="px" duration="1s" />
		</div>
	</div>
</div>
