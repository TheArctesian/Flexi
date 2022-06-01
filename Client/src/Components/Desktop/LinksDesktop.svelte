<script>
	import Managebac from '../../Assets/manageBac.png';
	import schoolagy from '../../Assets/schoolagy.png';
	import Logo from '../../Assets/logoPic.png';
	import powerschool from '../../Assets/powerschool.png';
</script>

<div class="content">
	<a href="https://mycis.cis.edu.hk/">
		<div class="thing">
			<h1 class="day">My CIS</h1>
			<div class="event">
				<img src={Logo} />
			</div>
		</div>
	</a>
	<a href="https://cishk.schoology.com/home/">
		<div class="thing">
			<h1 class="day">Schoolagy</h1>
			<div class="event">
				<img src={schoolagy} />
			</div>
		</div>
		<a href="https://cishk.powerschool.com/">
			<div class="thing">
				<h1 class="day">Powerschool</h1>
				<div class="event">
					<img src={powerschool} />
				</div>
			</div>
		</a>
		<a href="https://cishk.managebac.com/">
			<div class="thing">
				<h1 class="day">ManageBac</h1>
				<div class="event">
					<img src={Managebac} />
				</div>
			</div>
		</a>
	</a>
</div>

<style>
	.thing {
		margin: 2vw;
	}
	.day {
		text-align: center;
		background-color: #e6931d;
		padding: 0.5em;
		border-radius: 0.5em;
		margin: auto;
		margin-top: 5vh;
		margin-bottom: 2vh;
		color: white;
	}

	.event {
		background-color: #f0f0f0;
		padding: 0.5em;
		border-radius: 0.5em;
		height: 20vw;
	}
	img {
		width: 15vw;
		margin: auto;
	}

	.content {
		display: flex;
		justify-content: center;
		flex-wrap: wrap-reverse;
	}
</style>
