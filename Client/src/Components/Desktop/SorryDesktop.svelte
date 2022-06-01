<script>
</script>

<svelte:head>
	<title>Sorry</title>
</svelte:head>
<div class="flex justify-center items-center h-screen back">
	<div class="main rounded-3xl drop-shadow-2xl blober">
		<h1 class="text-5xl font-bold">Sorry......</h1>
		<br />
		<h1 class="text-xl font-bold">You are not allowed to access this page</h1>
		<br />
		<p>
			Given that this website only has utility to students of the chinese internatinoal school, you
			much use a CIS email adress to log in. If you used the wrong email please use the button
			bellow to sign in again. If not please do not use this website.
		</p>
		<br />
		<h1 class="text-center text-xl font-medium">We apiologies for any inconvenience</h1>
		<br />
		<div class="text-center" />
		<a href="/login">
			<div
				class="bg-white text-center main hover:bg-slate-100 text-xl text-white py-2 px-4
        rounded-xl buttons"
			>
				Go back
			</div>
		</a>
	</div>
</div>

<style>
	.blober {
		background: #f0f0f0;
		width: 50vw;
		color: #000000;
		padding: 3rem;
		transition: all 0.6s ease-in-out;
	}
	.blober:hover {
		transition: all 0.6s ease-in-out;
		background-color: #ffb1b1;
	}
	.buttons {
		background-color: #e6931d;
		color: #ffffff;
		font-weight: 600;
	}
</style>
