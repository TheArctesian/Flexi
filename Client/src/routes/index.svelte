<script lang="ts">

    import NavDesktop from "../Components/Desktop/NavDesktop.svelte"
    import ScheduleDesktop from "../Components/Desktop/ScheduleDesktop.svelte"    
	import GithubDesktop from '../Components/Desktop/GithubDesktop.svelte'

    import { onMount } from 'svelte';
    let isMobile:boolean = false;
    onMount(() => {
        isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    })
</script>

{#if isMobile}
<p> Not built</p>
{:else}

<NavDesktop/>
<ScheduleDesktop/>
<GithubDesktop/>	
{/if}