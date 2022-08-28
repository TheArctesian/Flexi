<script lang="ts">
	import type { teacher } from '$lib/Types/teacher';
	export let Title: string;
	export let Department: string;
	export let Room: string;
	export let Firstname: string;
	export let Lastname: string;
	export let Advisory: string;
	export let Yearjoined: string;
	export let Email: string;
	export let Image: string;
</script>

<div class="content">
	<div class="image">
		<img src={Image} />
	</div>
	<div class="text">
		<div class="tent">
			<h1>{Firstname} {Lastname}</h1>
			<p>{Title}</p>
			<p>Department: {Department}</p>
			<p>Joined:{Yearjoined}</p>
			<p>Advisory: {Advisory}</p>
			<p>Room: {Room}</p>
			<p>Email: {Email}</p>
		</div>
	</div>
</div>

<style>
	.content {
		color: white;
		padding: 1rem;
		border-radius: 1.3rem;
		margin: 1rem;
		display: flex;
		background-color: #4e4e4e;
		border: #9a0a27 0.2rem solid;
		width: fit-content;
	}
	.text {
		padding: 1rem;
	}
	.image {
		padding: 1rem;
		display: flex;
		width: 15rem;

		background-color: #4e4e4e;
	}
	.tent {
		background-color: #272727;
		border: #e6931d 0.2rem solid;
		border-radius: 1rem;
		padding: 1rem;
	}
	img {
		border-radius: 1rem;
		border: #e6931d 0.2rem solid;
	}
	h1 {
		text-align: center;
	}
	p {
		font-size: 1rem;
	}
</style>
