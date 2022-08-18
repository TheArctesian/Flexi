<script lang="ts">
	console.log('hello desktop');
</script>

<div class="content">
	<div class="thing">
		<h1 class="day">Monday</h1>
		<button>		<div class="event">Wellbeing</div>
			</button>
	</div>

	<div class="thing">
		<h1 class="day">Tuesday</h1>
		<div class="event">Wellbeing</div>
	</div>

	<div class="thing">
		<h1 class="day">Wednesday</h1>
		<div class="event">Wellbeing</div>
	</div>

	<div class="thing">
		<h1 class="day">Thursday</h1>
		<div class="event">Wellbeing</div>
	</div>
	<div class="thing">
		<h1 class="day">Friday</h1>
		<div class="event">Wellbeing</div>
	</div>
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
		width: 15vw;
		color: white;
	}

	.event {
		background-color: #f0f0f0;
		padding: 0.5em;
		border-radius: 0.5em;
		margin: auto;
		height: 50vh;
		width: 15vw;
		will-change: filter;
		transition: all ease-in-out 500ms ;
	}
	.event:hover{
		transition: all ease-in-out 200ms ;
		filter: drop-shadow(0 0 1em #e6931d)
	}

	.content {
		display: flex;
		margin: auto;
		justify-content: center;
		flex-direction: row;
	}
</style>
