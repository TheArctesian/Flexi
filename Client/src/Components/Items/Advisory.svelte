<script lang="ts">
	import type { advis } from '$lib/advisory';
	import { getAdvisory } from '$lib/advisory';

	import { yeargroup, advisory, userInfo } from '$lib/Stores/stores';
	import Teacher from './Teacher.svelte';
	let adv: advis;
	$: if ($userInfo == 'true') {
		adv = getAdvisory($yeargroup, $advisory);
	}
</script>

<br />
<div>
	<h1><strong>Advisory: </strong>&nbsp; {$yeargroup}{$advisory}</h1>
	<h1><strong>Teacher: </strong>&nbsp; {adv.Teacher}</h1>
	<h1><strong>Room: </strong>&nbsp; {adv.Room}</h1>
</div>

<style>
	div {
		position: relative;
		padding: 0.4rem;
		color: white;
		font-size: 0.8rem;
		margin: auto;
		padding: 1rem;
		width: fit-content;
		background-color: #4e4e4e;
		border-radius: 1.3rem;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		will-change: filter;
		transition: all ease-in-out 500ms;
	}
	div:hover {
		filter: drop-shadow(0 0 1em #ffffff);
	}
	h1 {
		margin: auto;
		display: flex;
	}
</style>
