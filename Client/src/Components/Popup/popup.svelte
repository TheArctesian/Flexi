<script>
	import { advisory, yeargroup, userInfo } from '$lib/Stores/stores';
	let advis = '';
	let yrg = '';
	function handleSubmit() {
		if (advis != '' && yrg != '') {
			advisory.set(advis);
			yeargroup.set(parseInt(yrg));
			userInfo.set(true);
			alert($advisory + $yeargroup + $userInfo);
		} else {
			alert('Please select your year group and advisory before submitting');
		}
	}
</script>

<style>
	form {
		position: absolute;
		background-color: rgba(32, 35, 37, 0.83);
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
		border-radius: 1.5rem;
		padding: 1rem;
		left: 30%;
		right: 30%;
		top: 40%;
		z-index: 3;
	}
	h1 {
		color: white;
		margin: auto;
		padding: .7rem;
		border-radius: 1rem;
	}
	div {
		display: flex;
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
	div{
		display: flex;
		justify-content:;
	}
	select {
		color: white;
		padding: .7rem;
		border-radius: 1rem;
		border: #fff solid 1px;
		background-color: rgba(67, 71, 73, 0.83);
	}
	option{
		color: white;
	}
</style>

<form on:submit|preventDefault={handleSubmit}>
	<div>
		<h1>Input year group:</h1>
		<select bind:value={yrg} name="yeargroup">
			<option value="7">07</option>
			<option value="8">08</option>
			<option value="9">09</option>
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
			<option value="P2">P2</option>
		</select>
	</div>
	<button type="submit">Submit</button>
</form>
