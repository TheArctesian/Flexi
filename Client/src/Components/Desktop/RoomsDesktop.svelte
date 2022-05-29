<script lang="ts">
	import Typeahead from 'svelte-typeahead';
	import data from '../../lib/teacherLookup';

	let events: any = [];
</script>

<Typeahead
	label=""
	placeholder={`Search for a teacher`}
	{data}
	extract={(item) => item.name}
	disable={(item) => /Carolina/.test(item.name)}
	on:select={({ detail }) => (events = [...events, detail])}
	on:clear={() => (events = [...events, 'clear'])}
/>

<pre>
	{JSON.stringify(events, null, 2)}
  </pre>

<style>
	:global([data-svelte-typeahead]) {
		margin: 2rem;
	}
	:global([role='listbox']) {
		margin: 2rem;
	}
</style>
