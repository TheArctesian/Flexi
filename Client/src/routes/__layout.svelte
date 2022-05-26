<script>
	import '../app.css';
</script>

<div class="logo-comp">
	<img alt="This is the github logo" src="./github.svg" class="github" />
	<div class="hiden">
		Check out the source code for the website by clicking here.
		<br /> Follow the documentation if you would like to learn to code and contribute!
	</div>
</div>

<slot />

<style>
	.logo-comp {
		position: absolute;
		background-color: #f0f0f0;
		border-radius: 2rem;
		width: fit-content;
		display: flex;
		flex-direction: row;
		transition: all 0.2s ease-in-out;
		margin: 1rem;
		bottom: 1rem;
		right: 1rem;
	}

	.hiden {
		display: none;
		justify-content: center;
		margin: auto;
		padding: 1rem;
		transition: all 0.2s ease-in-out;
	}
	.github:hover + .hiden {
		transition-duration: 400ms;
		display: block;
	}
</style>
