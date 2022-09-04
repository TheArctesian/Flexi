<script lang="ts">
	import Nav from '../Components/Items/Nav.svelte';
	import Schedule from '../Components/Pages/Schedule.svelte';
	import Github from '../Components/Items/Github.svelte';
	import { onMount } from 'svelte';
	let isMobile: boolean = false;
	onMount(() => {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	});
</script>
	<Nav />
	<Schedule />
	<Github />
