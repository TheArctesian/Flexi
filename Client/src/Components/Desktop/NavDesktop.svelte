<script lang="ts">
	import logo from '../../Assets/CIS.png';
	import { userInfo, advisory, yeargroup } from '$lib/Stores/stores';
</script>

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

	.icon:hover {
		background-color: #c9c9c9;
	}
	img {
		padding: 0.4rem;
		margin: auto;
		background-color: white;
		transition: all ease-in-out 500ms;
	}
	.side {
	}
	.links {
		display: flex;
		background-color: #9a0a27;
		border-radius: 1.3rem;
		justify-content: center;
		text-align: center;
		padding: 1rem;
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
		font-weight: 800;
		background-color: #e6931d;
		margin: auto;
		margin-left: 0.4rem;
		margin-right: 0.4rem;
		border-radius: 1rem;
		padding: 0.5rem;
		transition: all ease-in-out 200ms;
		color: white;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	h1:hover {
		background-color: #e6921d8f;
	}
	@media (max-width: 750px) {
		.side {
			display: none;
		}
		.links {
			margin: auto;
		}
		h1 {
			font-weight: 500;

			transition: all ease-in-out 500ms;
		}
	}
</style>

<div class="header">
	<a class="side" href="/calandar">
		<img class="icon" src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="CIS logo" />
	</a>
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
	<a class="side" href="/calandar">
		<img
			alt="calandar"
			class="icon"
			src="https://img.icons8.com/material-outlined/344/calendar--v1.png" />
	</a>
	<!-- {#if $userInfo}
                <h1 class="text-center t">{$yeargroup}{$advisory}</h1>
            {:else}
		<div class="icon">
			<img src={act} alt="CIS logo" />
		</div>
            {/if} -->
</div>
