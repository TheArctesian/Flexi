<script lang="ts">
	import data from '../../lib/teachers.json';
    
    let name = "";
    console.log(name)
    let empty = true;
    function findTeacher(name){
        console.log(name);
    }
        
</script>

<form
	class="bg-black-800 flex p-2 my-5 object-contain justify-around rounded-lg "
>
	<input
            class="rounded border bg-aro-900 text-white-50  flex-grow m-10 border-2 px-3 py-2"
		name="q"
		placeholder="Enter Teacher Name"
	>

</form>

    {#if empty}
        <img src="https://img.icons8.com/material-outlined/344/search.png">
    {:else}
        <h1>Home</h1>
    {/if}


<style>
</style>
