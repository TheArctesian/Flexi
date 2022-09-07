<script lang="ts">
	import Modetoggle from './modetoggle.svelte';
	let w;
</script>

<div class="header" bind:clientWidth={w}>
	{#if w > 750}
		<Modetoggle />
	{/if}
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

	<a class="side" target="_blank" href="https://github.com/TheArctesian/Flexi">
		<img
			alt="calandar"
			class="icon"
			src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"
		/>
	</a>

	<!-- {#if $userInfo}
                <h1 class="text-center t">{$yeargroup}{$advisory}</h1>
            {:else}
		<div class="icon">
			<img src={act} alt="CIS logo" />
		</div>
            {/if} -->
</div>

<style>
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 2rem;
	}

	.icon {
		display: flex;
		background-color: #4e4e4e;
		width: 4rem;
		border-radius: 1.3rem;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		transition: all ease-in-out 500ms;
	}
	:global(body.light) .icon {
		background-color: #f0f0f0;
	}

	:global(body.light) .icon:hover {
		background-color: #38383885;
	}

	.icon:hover {
		background-color: #c9c9c9;
	}
	img {
		padding: 0.4rem;
		margin: auto;
		transition: all ease-in-out 500ms;
	}
	.links {
		display: flex;
		background-color: #9a0a27;
		border-radius: 1.3rem;
		justify-content: center;
		text-align: center;
		padding: 0.8rem;
		transition: all ease-in-out 500ms;
	}
	.t {
		background-color: #4e4e4e;
		color: black;
		width: auto;
		padding: 1.5rem;
		border-radius: 1.3rem;
	}
	h1 {
		font-weight: 500;
		background-color: #e6931d;
		margin: auto;
		margin-left: 2rem;
		margin-right: 2rem;
		border-radius: 1rem;
		padding: 0.5rem;
		padding-left: 1rem;
		padding-right: 1rem;
		transition: all ease-in-out 200ms;
		color: white;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	h1:hover {
		background-color: #e6921d8f;
	}
	@media (max-width: 840px) {
		.side {
			display: none;
		}
		.links {
			margin: auto;
		}
		h1 {
			font-weight: 500;
			margin-left: 0.4rem;
			margin-right: 0.4rem;
			transition: all ease-in-out 500ms;
		}
	}
</style>
