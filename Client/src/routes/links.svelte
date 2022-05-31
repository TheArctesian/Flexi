<script lang="ts">
	import LoginDesktop from '../Components/Desktop/LoginDesktop.svelte';

	import LoginMobile from '../Components/Mobile/LoginMobile.svelte';
	import { onMount } from 'svelte';

	let isMobile: boolean = false;
	onMount(() => {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	});
</script>

{#if isMobile}
	<LoginMobile />
{:else}
	<LoginDesktop />
{/if}
