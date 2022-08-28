<script lang="ts">
	import { advisory } from '$lib/Stores/stores';
	import type { teacher } from '$lib/teacher';
	export let user: teacher;
</script>

<style>
	.content {
		display: flex;
		flex-direction: row;
	}
	.image {
		padding: 1.3rem;
		background-color: #4e4e4e;
	}
	img {
		padding: 1.3rem;
	}
</style>

<div class="content">
	<div class="image">
		<img src={user.image} />
	</div>
	<div class="text">
		<h3>{user.title} | Department: {user.department} | Joined {user.room}</h3>
		<h1>{user.firstname} {user.lastname}</h1>
		<p>Advisory: {user.advisory}</p>
		<p>Room: {user.advisory}</p>
		<p>Email: {user.email}</p>
	</div>
</div>
