<script lang="ts">
	import NavDesktop from '../Components/Desktop/NavDesktop.svelte';
	import LinksDesktop from '../Components/Desktop/LinksDesktop.svelte';
	import GithubDesktop from '../Components/Desktop/GithubDesktop.svelte';

	import NavMobile from '../Components/Mobile/NavMobile.svelte';
	import LinksMobile from '../Components/Mobile/LinksMobile.svelte';
	import GithubMobile from '../Components/Mobile/GithubMobile.svelte';

	import { onMount } from 'svelte';
	let isMobile: boolean = false;
	onMount(() => {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	});
</script>

{#if isMobile}
	<NavMobile />
	<LinksMobile />
	<GithubMobile />
{:else}
	<NavDesktop />
	<LinksDesktop />
	<GithubDesktop />
{/if}
