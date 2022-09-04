<script lang="ts">
	import NavDesktop from '../../Components/Desktop/NavDesktop.svelte';
	import AdminLayout from '../../Components/Desktop/adminLayout.svelte';
	import GithubDesktop from '../../Components/Desktop/GithubDesktop.svelte';
	import { onMount } from 'svelte';
	let isMobile: boolean = false;
	onMount(() => {
		isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	});
</script>

<NavDesktop />
<AdminLayout />
<GithubDesktop />
