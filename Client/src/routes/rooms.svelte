<script lang="ts">
	import NavDesktop from '../Components/Desktop/NavDesktop.svelte';
	import RoomsDesktop from '../Components/Desktop/RoomsDesktop.svelte';
	import GithubDesktop from '../Components/Desktop/GithubDesktop.svelte';

	import NavMobile from '../Components/Mobile/NavMobile.svelte';
	import RoomsMobile from '../Components/Mobile/RoomsMobile.svelte';
	import GithubMobile from '../Components/Mobile/GithubMobile.svelte';
	import { onMount } from 'svelte';
	let isMobile: boolean = false;
	onMount(() => {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	});
</script>

{#if isMobile}
	<NavMobile />
	<RoomsMobile />
	<GithubMobile />
{:else}
	<NavDesktop />
	<RoomsDesktop />
	<GithubDesktop />
{/if}
