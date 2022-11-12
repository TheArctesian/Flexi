<script lang="ts">
	import type { teacher } from '$lib/Types/teacher';
	import data from '$lib/Data/teachers.json';
	import Teacher from '../Items/Teacher.svelte';
	import { each } from 'svelte/internal';
	import { userInfo } from '$lib/Stores/stores';
	let name = '';
	let empty = true;
	let list: any = [];
	function clearList() {
		list = [];
	}
	function findTeacher() {
		list.length = 0;
		let s = name;
		for (let i = 0; i < data.length; i++) {
			//loop through all data
			// load in information from object
			let fname = data[i].firstName;
			let lname = data[i].lastName;
			let title = data[i].title;
			let room = data[i].room;
			let year = data[i].joined;
			let department = data[i].department;
			//get the substring (first couple letters) of a string proportional to the length of the
			//input string
            // change this to a compare string method because this is shit
			if (
				fname.substring(0, s.length).toLowerCase() == s.toLocaleLowerCase() ||
				lname.substring(0, s.length).toLowerCase() == s.toLocaleLowerCase() ||
				title.substring(0, s.length).toLowerCase() == s.toLocaleLowerCase() ||
				room.toString().substring(0, s.length).toLowerCase() == s.toLocaleLowerCase() ||
				year.toString().substring(0, s.length).toLowerCase() == s.toLocaleLowerCase() ||
				department.substring(0, s.length).toLowerCase() == s.toLocaleLowerCase()
			) {
				//return all viable teachers that meet the conditions set
				list.push(data[i]);
			}
		}
	}
</script>

<form class="bg-black-800 flex p-2 my-5 object-contain justify-around ">
	<input
		bind:value={name}
		on:input={findTeacher}
		class="rounded flex-grow m-10 px-3 py-2"
		placeholder="Enter Teacher Name"
	/>
</form>

<div class="res">
	{#each list as user}
		<!-- Loops over eacher teacher in list and displays them -->
		<Teacher
			Title={user.title}
			Department={user.department}
			Room={user.room}
			Firstname={user.firstName}
			Lastname={user.lastName}
			Yearjoined={user.joined}
			Advisory={user.advisory}
			Image={user.image}
		/>
	{/each}
</div>

<style>
	.res {
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		transition: all ease-in-out 500ms;
	}
	form {
		border-radius: 1.3rem;
		color: white;
	}

	input {
		border: #e6931d solid 0.2rem;
		background-color: #4e4e4e;
		outline-width: 0;
		transition: all ease-in-out 500ms;
	}
	:global(body.light) input {
		background-color: #f0f0f0;
		color: black;
	}
	input:focus,
	input:hover {
		border: #9a0a27 solid 0.2rem;
	}
	input::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: rgb(209, 209, 209);
		opacity: 1; /* Firefox */
	}
	:global(body.light) input::placeholder {
		color: rgb(68, 68, 68);
	}
</style>
