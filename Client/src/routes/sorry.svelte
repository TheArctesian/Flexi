<script lang="ts">
	import SorryDesktop from '../Components/Desktop/SorryDesktop.svelte';
	import GithubDesktop from '../Components/Desktop/GithubDesktop.svelte'
	import { onMount } from 'svelte';
	let isMobile: boolean = false;
	onMount(() => {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	});
</script>

{#if isMobile}
	<p>Not built</p>
{:else}
	<SorryDesktop />
	<GithubDesktop/>	
{/if}

