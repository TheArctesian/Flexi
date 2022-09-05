<script lang="ts">
	import Nav from '../../Components/Items/Nav.svelte';
	import AdminLayout from '../../Components/Admin/adminLayout.svelte';
	import Github from '../../Components/Items/Github.svelte';
	import teachers from '../../lib/Data/teachers';
	import type { teacher } from '$lib/Types/teacher';
	import * as fs from 'fs';
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
		fs.renameSync('../../lib/Data/teachers.json', '../../lib/Data/teachers.json.bak');
		alert('written');
		const callback = (err) => {
			alert('write failed ' + err);
		};
		fs.writeFile('../../lib/Data/teachers.json', content, callback);
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
			<th style="color: white">Firstname</th>
			<th style="color: white">Lastname</th>
			<th style="color: white">Title</th>
			<th style="color: white">Advisory</th>
			<th style="color: white">Department</th>
			<th style="color: white">Joined</th>
			<th style="color: white">Room</th>
			<th style="color: white">Image</th>
		</tr>
		{#each TeacherList as a}
			<tr>
				<th><input bind:value={a.firstName} /></th>
				<th><input bind:value={a.lastName} /></th>
				<th><input bind:value={a.title} /></th>
				<th><input bind:value={a.advisory} /></th>
				<th><input bind:value={a.department} /></th>
				<th><input bind:value={a.joined} /></th>
				<th><input bind:value={a.room} /></th>
				<th><input bind:value={a.image} /></th>
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
