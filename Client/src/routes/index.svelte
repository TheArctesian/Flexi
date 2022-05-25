<script lang="ts">
	import NavDesktop from '../Components/Desktop/NavDesktop.svelte';
	import ScheduleDesktop from '../Components/Desktop/ScheduleDesktop.svelte';
	import GithubDesktop from '../Components/Desktop/GithubDesktop.svelte';

	import NavMobile from '../Components/Mobile/NavMobile.svelte';
	import ScheduleMobile from '../Components/Mobile/ScheduleMobile.svelte';
	import GithubMobile from '../Components/Mobile/GithubMobile.svelte';

	import { onMount } from 'svelte';
	let isMobile: boolean = false;
	onMount(() => {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	});
</script>

{#if isMobile}
	<NavMobile />
	<ScheduleMobile />
	<GithubMobile />
{:else}
	<NavDesktop />
	<ScheduleDesktop />
	<GithubDesktop />
{/if}
