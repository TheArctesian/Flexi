<script lang="ts">
    import {fetch} from "../Lib/fetch";
    const {data, error} = fetch("https://127.0.0.1:6000/");
</script>

<h1 class="text-center"> {data} </h1>