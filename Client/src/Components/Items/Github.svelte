<script>
	import Modetoggle from './modetoggle.svelte';
	let w;
</script>

<style>
	img {
		padding: 0.4rem;
		background-color: #4e4e4e;
		width: 4rem;
		border-radius: 1.3rem;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		transition: all ease-in-out 500ms;
	}
	:global(body.light) img {
		background-color: #f0f0f0;
	}
	img:hover {
		background-color: #c9c9c9;
	}
	.wrapper {
		display: flex;
		justify-content: center;
		margin: auto;
	}
	.space {
		width: 3rem;
	}
</style>

<div class="wrapper" bind:clientWidth={w}>
	{#if w < 750}
		<div class="flex">
			<a href="https://github.com/TheArctesian/Flexi" target="_blank">
				<div class="logo-comp">
					<img
						alt="This is the github logo"
						src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"
						class="github" />
				</div>
			</a>
		</div>
		<div class="space" />
		<Modetoggle />
	{/if}
</div>
