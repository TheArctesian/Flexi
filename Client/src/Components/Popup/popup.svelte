<script>
	import { advisory, yeargroup, userInfo } from '$lib/Stores/stores';

	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	let advis = '';
	let yrg = '';
	onMount(function () {
		yeargroup.set(localStorage.getItem('yeargroup'));
		advisory.set(localStorage.getItem('advisory'));
		userInfo.set(localStorage.getItem('userInfo'));
	});
	function handleSubmit() {
		if (advis != '' && yrg != '') {
			advisory.set(advis);
			yeargroup.set(yrg);
			userInfo.set('true');
			userInfo.subscribe((val) => browser && localStorage.setItem('userInfo', val));
			yeargroup.subscribe((val) => browser && localStorage.setItem('yeargroup', val));
			advisory.subscribe((val) => browser && localStorage.setItem('advisory', val));
		} else {
			alert('Please select your year group and advisory before submitting');
		}
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<div>
		<h1>Input year group:</h1>
		<select bind:value={yrg} name="yeargroup">
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
			<option value="13">13</option>
		</select>
	</div>
	<div>
		<h1>Advisory:</h1>
		<select bind:value={advis} name="Advisory">
			<option value="R1">R1</option>
			<option value="R2">R2</option>
			<option value="Y1">Y1</option>
			<option value="Y2">Y2</option>
			<option value="G1">G1</option>
			<option value="G2">G2</option>
			<option value="B1">B1</option>
			<option value="B2">B2</option>
			<option value="JSH">JSH</option>
			<option value="AH">AH</option>
			<option value="JM">JM</option>
		</select>
	</div>
	<div>
		<button type="submit">Submit</button>
	</div>
</form>

<style>
	form {
		position: absolute;
		background-color: rgba(32, 35, 37, 0.83);
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
		border-radius: 1.5rem;
		left: 50%;
		transform: translate(-50%, -50%);
		top: 50%;
		z-index: 3;
		transition: all ease-in-out 500ms;
	}
	h1 {
		color: white;
		margin: auto;
		padding: 0.7rem;
		border-radius: 1rem;
	}
	div {
		display: flex;
		flex-direction: row;
		float: left;
		padding: 1rem;
	}
	select {
		margin: auto;
	}
	button {
		display: flex;
		padding: 0.8rem;
		background-color: #e6931d;
		border-radius: 1rem;
		margin: auto;
		color: white;
		text-align: center;
	}
	div {
		display: flex;
		justify-content: space-around;
	}
	select {
		color: white;
		padding: 0.7rem;
		border-radius: 1rem;
		border: #fff solid 1px;
		background-color: rgba(67, 71, 73, 0.83);
	}
	option {
		color: white;
	}
</style>
