<script lang="ts">
	let isMobile: boolean = false;
	onMount(() => {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	});
</script>

{#if isMobile}
	<p>No mobile support for admin page</p>
{:else}
	<NavDesktop />
	<LinksDesktop />
	<GithubDesktop />
{/if}
