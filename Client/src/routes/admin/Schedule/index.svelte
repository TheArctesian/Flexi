<script lang="ts">
	import Nav from '../../../Components/Items/NavAdmin.svelte';
	import Github from '../../../Components/Items/Github.svelte';
	let yeargroups: string[] = ['7', '8', '9', '10', '11', '12', '13'];
</script>

<Nav />

<div>
	<h1>Which datasheet would you like to edit</h1>
	<div class="options">
		{#each yeargroups as year}
			<a href="/admin/Schedule/{year}">
				<div class="data">Y{year}</div>
			</a>
		{/each}
	</div>
</div>

<Github />

<style>
	h1 {
		color: white;
		text-align: center;
		font-size: 1.4rem;
		background-color: #4e4e4e;
		margin: auto;
		border-radius: 1rem;
		width: fit-content;
		padding: 1rem;
	}
	:global(body.light) h1 {
		background-color: #f0f0f0;
		color: black;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
	}
	.options {
		display: flex;
		text-align: center;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.data {
		margin: auto;
		background-color: #e6931d;
		padding: 4rem;
		border-radius: 1rem;
		margin-top: 5rem;
		color: white;
		font-size: 2rem;
	}
	.data:hover {
		background-color: #e6921d7c;
	}
	a {
		margin: auto;
	}
</style>
