<script lang="ts">
	import type { teacher } from '$lib/Types/teacher';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let Title: string;
	export let Department: string;
	export let Room: string;
	export let Firstname: string;
	export let Lastname: string;
	export let Advisory: string;
	export let Yearjoined: string;
	export let Image: string;
</script>

<style>
	.content {
		color: white;
		padding: 1rem;
		border-radius: 1.3rem;
		margin: 1rem;
		display: flex;
		background-color: #4e4e4e;
		width: fit-content;
		will-change: filter;
		transition: all ease-in-out 500ms;
	}
	:global(body.light) .content {
		background-color: #f0f0f0;
	}
	@media (max-width: 750px) {
		.content {
			display: block;
		}
		.image {
			margin: auto;
			text-align: center;
		}
		img {
			margin: auto;
		}
	}
	.content:hover {
		transition: all ease-in-out 200ms;
		filter: drop-shadow(0 0 1em #ffffff);
	}
	.text {
		padding: 1rem;
	}
	.image {
		padding: 1rem;
		display: flex;
		width: 15rem;
		transition: all ease-in-out 500ms;
	}

	.tent {
		background-color: #272727;
		border-radius: 1rem;
		padding: 1rem;
	}
	:global(body.light) .tent {
		background-color: #d6d6d6;
		color: black;
	}
	img {
		border-radius: 1rem;
		border: #e6931d 0.2rem solid;
	}
	h1 {
		text-align: center;
		font-weight: 600;
		color: white;
	}
	:global(body.light) h1 {
		color: black;
	}
	p {
		font-size: 1rem;
	}
</style>

<div class="content" transition:scale={{ delay: 100, duration: 500, easing: quintOut }}>
	<div class="image">
		<img src={Image} />
	</div>
	<div class="text">
		<div class="tent">
			<h1>{Firstname} {Lastname}</h1>
			<p class="">Title: {Title}</p>
			<p>Department: {Department}</p>
			<p>Joined: {Yearjoined}</p>
			<p>Advisory: {Advisory}</p>
			<p>Room: {Room}</p>
		</div>
	</div>
</div>
