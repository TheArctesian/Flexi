<script lang="ts">
    import logo from '../../Assets/logoPic.png';
    import google from '../../Assets/google.png';
    <script context="module">
  export async function load({ session }) {
    return {
      props: {
        user: session.user,
      },
    };
  }
</script>

<script>
  export let user;
</script>
</script>
<style>
    div{
        display: flex;
        justify-content: center;

    }
    img{
        display: flex;
        margin: auto;
        justify-content: center;
    }
    .log{
        margin-top: 25vh;
        border-color: #9A0A27;
    }
    .logo{
        margin-top: 10vh;
    }
    .orange{
        background-color: #E6931D;
        border-radius: 1rem;
        margin: auto;
        padding: 1rem;
        width: fit-content;
        margin-top: 30vh;
        color: white;
    }
</style>
<div>
<img class="logo" src={logo}>
</div>
<div >
    <form action="/login">
<button class="log p-3 rounded-3xl shadow-lg hover:border-4 flex
      shadow-lg duration-750 ease-in-out transition hover:scale-105
      drop-shadow-2xl" on:click={() => signIn()}>
        <img class="flex"
          src="{google}"
        alt="google icon"
        />
        <!-- <a class="link" sveltekit:prefetch href="/login"> -->
        <p class="flex p-8 text-xl ">
          Sign into google here
        </p>
    </button>
    </form>
</div>

<div class="orange">
    <h1>Only CIS facualty and students can use the app</h1>
</div>