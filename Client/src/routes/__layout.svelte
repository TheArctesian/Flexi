<script>
	import '../app.css';
	import Popup from '../Components/Popup/popup.svelte';
	import { userInfo, advisory, yeargroup } from '$lib/Stores/stores';
</script>

<style>
	:global(body) {
		background-color: #272727;
	}
</style>

{#if $userInfo == "true" }
	<slot />
{:else}
	<Popup />
	<slot />
{/if}
