<script lang="ts">
	import Nav from '../../Components/Items/Nav.svelte';
	import AdminLayout from '../../Components/Admin/adminLayout.svelte';
	import Github from '../../Components/Items/Github.svelte';
	import teacher from '$lib/Data/teachers';
</script>

<Nav />
{#each teacher as a}
	<p>{a.lastName}</p>
{/each}
<Github />
