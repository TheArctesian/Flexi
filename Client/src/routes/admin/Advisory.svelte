<script lang="ts">
	import Nav from '../../Components/Items/Nav.svelte';
	import AdminLayout from '../../Components/Admin/adminLayout.svelte';
	import Github from '../../Components/Items/Github.svelte';
	import Advisory from '$lib/Data/Advisory';
	import type { advis } from '$lib/advisory';
	let AdvisoryList: advis[] = Advisory;
	let AdvisorySave: advis[] = Advisory;
	function revert() {
		AdvisoryList = AdvisorySave;
	}
	function write() {
		console.log(AdvisoryList[0].Advisory);
		console.log(AdvisoryList[0].Teacher);
		let json = JSON.stringify(AdvisoryList);
		console.log(json);
	}
</script>

<Nav />
<div class="functions">
	<button on:click={write}>Write</button>
	<button on:click={revert}>revert</button>
</div>
<div>
	<table>
		<tr>
			<th style="color: white">Advisory</th>
			<th style="color: white">Teacher</th>
			<th style="color: white">Room</th>
		</tr>
		{#each AdvisoryList as a}
			<tr>
				<th><input bind:value={a.Advisory} /></th>
				<th><input bind:value={a.Teacher} /></th>
				<th><input bind:value={a.Room} /></th>
			</tr>
		{/each}
	</table>
</div>
<Github />

<style>
	.functions {
		margin: auto;
		display: flex;
		width: fit-content;
	}

	button {
		padding: 0.5rem;
		margin-left: 1rem;
		border-radius: 1rem;
		background-color: white;
		margin-bottom: 1rem;
	}
	table,
	th,
	td {
		border: 1px solid #e6931d;
	}
	input {
		background-color: #4e4e4e;
		color: white;
		width: max-content;
	}
	table {
		margin: auto;
		border-radius: 1rem;
	}
</style>
