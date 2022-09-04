<script>
	import '../app.css';
	import Popup from '../Components/Popup/popup.svelte';
	import { userInfo, advisory, yeargroup } from '$lib/Stores/stores';
	import Advisory from '../Components/Items/Advisory.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
</script>

{#if $userInfo == 'true'}
	<slot />
	<Advisory />
{:else}
	<Popup />
	<slot />
{/if}

<style>
	:global(body) {
		background-color: #272727;
	}
</style>
