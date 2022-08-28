<script lang="ts">
	import data from '../../lib/teachers.json';
	let name = '';
	console.log(name);
	let empty = true;
	function findTeacher() {
		console.log(name);
	}
</script>

<style>
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
	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: rgb(209, 209, 209);
		opacity: 1; /* Firefox */
	}
</style>

<form class="bg-black-800 flex p-2 my-5 object-contain justify-around ">
	<input
		on:change={findTeacher}
		bind:value={name}
		on:input={findTeacher}
		class="rounded flex-grow m-10 px-3 py-2"
		placeholder="Enter Teacher Name" />

</form>

{#if empty}

{:else}
	<h1>Home</h1>
{/if}
