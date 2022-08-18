<script lang="ts">
	import { fromJSON } from 'postcss';

	let tempN: string = '';
	import data from '../../lib/teachers.json';
	interface teacher {
		name: string;
	}
	let teacherNames: teacher[] = data.name;
	console.log(data);

	function getName(n): any {
		for (let v in data) {
			console.log(v);
		}
		return n;
	}
</script>

<style>
	img {
		margin-right: 1rem;
		height: 3rem;
	}
</style>

<form
	class=" flex p-2 my-5 object-contain justify-around rounded-lg "
	action="https://duckduckgo.com/">
	<div class="rounded-lg flex w-full border-2 px-3 py-2">
		<img src="https://img.icons8.com/ios-glyphs/344/search.png" />
		<input
			class="px-3 w-full py-2"
			name="Query Teacher"
			bind:value={tempN}
			placeholder="Enter Your Teacher Name"
			on:input={getName(tempN)} />
	</div>
</form>
{#each data as user (user.name)}
	<p>{user.name}</p>
{/each}
