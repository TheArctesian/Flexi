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
		if (s == '') {
			list = [];
		}
		for (let i = 0; i < data.length; i++) {
			let fname = data[i].firstName;
			let lname = data[i].lastName;
			if (
				fname.substring(0, s.length).toLowerCase() == s ||
				lname.substring(0, s.length).toLowerCase() == s
			) {
				list.push(data[i]);
				console.log(data[i].firstName);
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
		<!-- {#each list as user}
	<h1 class="text-white">{user.title}</h1> -->
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
	input:focus,
	input:hover {
		border: #9a0a27 solid 0.2rem;
	}
	input::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: rgb(209, 209, 209);
		opacity: 1; /* Firefox */
	}
</style>
