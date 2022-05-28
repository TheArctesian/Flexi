<script lang="ts">
	import logo from '../../Assets/logoPic.png';
	import act from '../../Assets/ac.png';
</script>

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
		<div class="icon">
			<img src={act} alt="CIS logo" />
		</div>
	</a>
</div>

<style>
	.header {
		display: flex;
		flex-direction: row;
		margin: 2rem;
	}

	.icon {
		background-color: #f0f0f0;
		border-radius: 1.3rem;
	}

	img {
		width: 4vw;
		margin: auto;
	}
	.links {
		display: flex;
		margin: auto;
		width: 70vw;
		height: 4vw;
		background-color: #9a0a27;
		border-radius: 1.3rem;
		justify-content: center;
		text-align: center;
	}
	h1 {
		background-color: #e6931d;
		margin-left: 2vw;
		margin-right: 2vw;
		margin-top: 0.75vw;
		width: 20vw;
		border-radius: 1.3rem;
		padding: 0.5rem;
		color: white;
		box-shadow: 0 1px 2px 0 rgb(29, 29, 29);
	}
</style>
