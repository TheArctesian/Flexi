<script>
	import '../app.css';
	import Popup from '../Components/Popup/popup.svelte';
	import { userInfo, advisory, yeargroup } from '$lib/Stores/stores';
</script>

{#if $userInfo}
	<slot />
{:else}
	<Popup />
	<slot />
{/if}
