<script lang="ts">
	import Nav from '../../Components/Items/Nav.svelte';
	import AdminLayout from '../../Components/Admin/adminLayout.svelte';
	import Github from '../../Components/Items/Github.svelte';
	import Advisory from '$lib/Data/Advisory';
</script>

<Nav />
{#each Advisory as a}
	<p>{a}</p>
{/each}
<Github />
