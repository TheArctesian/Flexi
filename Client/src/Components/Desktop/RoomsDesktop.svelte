<script lang="ts">
	import data from '../../lib/teachers.json';

	console.log(data);
</script>

<style>
	:global([data-svelte-typeahead]) {
		margin: 2rem;
		border-radius: 1rem;
	}
	:global([role='listbox']) {
	}
</style>

<Typeahead
	label=""
	placeholder={`🔎 Search for a teacher `}
	{data}
	extract={(item) => item.name}
	disable={(item) => /Carolina/.test(item.name)}
	on:select={({ detail }) => (events = [...events, detail])}
	on:clear={() => (events = [...events, 'clear'])} />

<pre>{JSON.stringify(events)}</pre>
