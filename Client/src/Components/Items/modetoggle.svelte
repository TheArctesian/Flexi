<script lang="ts">
	let img: string =
		'https://img.icons8.com/external-dashed-line-kawalan-studio/344/external-dark-mode-user-interface-dashed-line-kawalan-studio.png';
	let mode = 'dark';
	function toggle() {
		if (mode == 'dark') {
			mode = 'light';
			window.document.body.classList.toggle('light');
			img = 'https://img.icons8.com/material-outlined/344/sun--v1.png';
		} else if (mode == 'light') {
			mode = 'dark';
			img =
				'https://img.icons8.com/external-dashed-line-kawalan-studio/344/external-dark-mode-user-interface-dashed-line-kawalan-studio.png';
			window.document.body.classList.toggle('light');
		}
	}
</script>

<button on:click={toggle} class="side">
	<img class="icon" src={img} alt="CIS logo" />
</button>

<style>
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
</style>
