<script lang="ts">
	import logo from '../../Assets/CIS.png';
    import act from '../../Assets/ac.png';
	import { userInfo, advisory, yeargroup } from '$lib/Stores/stores';
</script>

<style>
	.header {
		display: flex;
		flex-direction: row;
		margin: 2rem;
	}

	.icon {
		background-color: #f0f0f0;
		border-radius: 1.3rem;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	.icon:hover {
		background-color: #f0f0f09f;
	}

	img {
		width: 6vw;
		padding: 0.4rem;
		margin: auto;
	}
	.links {
		display: flex;
		margin: auto;
		width: 70vw;
		background-color: #9a0a27;
		border-radius: 1.3rem;
		justify-content: center;
		text-align: center;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		padding: 1rem;
    }
    .t {
		background-color: #f0f0f0;
        color: black;
        width: auto;
        padding: 1.5rem;
		border-radius: 1.3rem;
    }
	h1 {
		background-color: #e6931d;
		margin: auto;
		width: 20vw;
		margin-left: 0.25rem;
		margin-right: 0.25rem;
		border-radius: 1rem;
		padding: 0.5rem;
		color: white;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
</style>

<div class="header">
	<div class="icon">
		<img src={logo} alt="CIS logo" />
	</div>
	<div class="links">
		<a href="/">
			<h1>Flexi Schedule</h1>
		</a>
		<a href="/rooms">
			<h1>Teacher Rooms</h1>
		</a>
		<a href="/links">
			<h1>Useful Links</h1>
		</a>
	</div>
	<a href="/account">
            {#if $userInfo}
                <h1 class="text-center t">{$yeargroup}{$advisory}</h1>
            {:else}
		<div class="icon">
			<img src={act} alt="CIS logo" />
		</div>
            {/if}
	</a>
</div>
