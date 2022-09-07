<script lang="ts">
	import type { advis } from '$lib/advisory';
	import { getAdvisory } from '$lib/advisory';

	import { browser } from '$app/env';
	import { yeargroup, advisory, userInfo } from '$lib/Stores/stores';
	import Teacher from './Teacher.svelte';
	let adv: advis;
	$: if ($userInfo == 'true') {
		adv = getAdvisory($yeargroup, $advisory);
	}

	function logout() {
		yeargroup.set(localStorage.getItem(''));
		advisory.set(localStorage.getItem(''));
		userInfo.set(localStorage.getItem(''));
		userInfo.subscribe((val) => browser && localStorage.setItem('userInfo', val));
		yeargroup.subscribe((val) => browser && localStorage.setItem('yeargroup', val));
		advisory.subscribe((val) => browser && localStorage.setItem('advisory', val));
	}
</script>

<br />
<div class="bg">
	<div class="d">
		<div class="item">
			<h1>
				<strong>Advisory:</strong>
				&nbsp; {$yeargroup}{$advisory}
			</h1>
			<h1>
				<strong>Teacher:</strong>
				&nbsp; {adv.Teacher}
			</h1>
			<h1>
				<strong>Room:</strong>
				&nbsp; {adv.Room}
			</h1>
		</div>
		<div class="butt item">
			<button on:click={logout}>Log Out</button>
		</div>
	</div>
</div>

<style>
	.item {
		flex-direction: row;
	}
	.d {
		display: flex;
	}
	button {
		margin: 0.4rem;
		background-color: #e6931d;
		padding: 0.4rem;
		border-radius: 1rem;
		transition: all ease-in-out 500ms;
	}
	button:hover {
		background-color: #e6921d5b;
	}
	.butt {
		text-align: center;
		margin: auto;
	}
	.bg {
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
	:global(body.light) .bg {
		background-color: #f0f0f0;
		color: black;
	}
	.bg:hover {
		filter: drop-shadow(0 0 1em #ffffff);
	}
	h1 {
		margin: auto;
		display: flex;
	}
</style>
