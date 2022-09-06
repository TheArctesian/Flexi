<script lang="ts">
	import Nav from '../../Components/Items/Nav.svelte';
	import AdminLayout from '../../Components/Admin/adminLayout.svelte';
	import Github from '../../Components/Items/Github.svelte';
	import teachers from '../../lib/Data/teachers';
	import type { teacher } from '$lib/Types/teacher';
	//	import * as fs from 'fs';
	let TeacherList: teacher[] = teachers;
	let TeacherSave: teacher[] = teachers;
	function revert() {
		let content = JSON.stringify(TeacherSave);
		save(content);
		alert('Please reload to see affect');
	}
	function write() {
		console.log(TeacherList[0].Advisory);
		let json = JSON.stringify(TeacherList);
		save(json);
	}
	function save(content: any) {
		//		fs.renameSync('../../lib/Data/teachers.json', '../../lib/Data/teachers.json.bak');
		alert('written');
		const callback = (err) => {
			alert('write failed ' + err);
		};
		//		fs.writeFile('../../lib/Data/teachers.json', content, callback);
	}
</script>

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
	:global(body.light) button {
		background-color: #f0f0f0;
	}
	table,
	th,
	td {
		border: 4px solid black;
	}
	input {
		background-color: #4e4e4e;
		color: white;
		width: max-content;
	}
	:global(body.light) input {
		background-color: #f0f0f0;
		color: black;
	}
	table {
		margin: auto;
		border-radius: 1rem;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
	}
	tr {
		color: white;
	}
	:global(body.light) tr {
		color: black;
	}
</style>

<Nav />
<div class="functions">
	<button on:click={write}>Write</button>
	<button on:click={revert}>revert</button>
</div>
<div>
	<table>
		<tr>
			<th style="">Firstname</th>
			<th style="">Lastname</th>
			<th style="">Title</th>
			<th style="">Advisory</th>
			<th style="">Department</th>
			<th style="">Joined</th>
			<th style="">Room</th>
			<th style="">Image</th>
		</tr>
		{#each TeacherList as a}
			<tr>
				<th>
					<input bind:value={a.firstName} />
				</th>
				<th>
					<input bind:value={a.lastName} />
				</th>
				<th>
					<input bind:value={a.title} />
				</th>
				<th>
					<input bind:value={a.advisory} />
				</th>
				<th>
					<input bind:value={a.department} />
				</th>
				<th>
					<input bind:value={a.joined} />
				</th>
				<th>
					<input bind:value={a.room} />
				</th>
				<th>
					<input bind:value={a.image} />
				</th>
			</tr>
		{/each}
	</table>
</div>
<Github />
