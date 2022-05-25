<script lang="ts">
	import SorryDesktop from '../Components/Desktop/SorryDesktop.svelte';
	import GithubDesktop from '../Components/Desktop/GithubDesktop.svelte';

	import SorryMobile from '../Components/Mobile/SorryMobile.svelte';
	import GithubMobile from '../Components/Mobile/GithubMobile.svelte';
	import { onMount } from 'svelte';
	let isMobile: boolean = false;
	onMount(() => {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	});
</script>

{#if isMobile}
	<SorryMobile />
	<GithubMobile />
{:else}
	<SorryDesktop />
	<GithubDesktop />
{/if}
