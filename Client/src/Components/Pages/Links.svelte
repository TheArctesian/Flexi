<script>
	import Managebac from '../../Assets/Manage.png';
	import schoolagy from '../../Assets/school.png';
	import Logo from '../../Assets/CIS.png';
	import powerschool from '../../Assets/power.png';
</script>

<style>
	.element {
		display: flex;
		margin: 2rem;
		transition: all ease-in-out 500ms;
	}
	.name {
		text-align: center;
		background-color: #e6931d;
		padding: 0.5em;
		border-radius: 0.5em;
		margin: auto;
		color: white;
		transition: all ease-in-out 500ms;
	}

	.event {
		background-color: #f0f0f0;
		padding: 0.5em;
		margin-top: 1rem;
		border-radius: 0.5em;
		transition: all ease-in-out 500ms;
	}
	.event:hover {
		background-color: #f0f0f087;
	}
	img {
		margin: auto;
	}

	.content {
		display: flex;

		flex-wrap: wrap;
		justify-content: space-around;
		transition: all ease-in-out 500ms;
	}
	@media (max-width: 750px) {
		.element {
			width: 30vw;
		}
	}
</style>

<div class="content">
	<div class="element">
		<a href="https://mycis.cis.edu.hk/">
			<h1 class="name">My CIS</h1>
			<div class="event">
				<img src={Logo} />
			</div>
		</a>
	</div>
	<div class="element">
		<a href="https://cishk.schoology.com/home/">
			<h1 class="name">Schoology</h1>
			<div class="event">
				<img src={schoolagy} />
			</div>
		</a>
	</div>
	<div class="element">
		<a href="https://cishk.powerschool.com/">
			<h1 class="name">Powerschool</h1>
			<div class="event">
				<img src={powerschool} />
			</div>
		</a>
	</div>
	<div class="element">
		<a href="https://cishk.managebac.com/">
			<div class="thing">
				<h1 class="name">ManageBac</h1>
				<div class="event">
					<img src={Managebac} />
				</div>
			</div>
		</a>
	</div>
</div>
