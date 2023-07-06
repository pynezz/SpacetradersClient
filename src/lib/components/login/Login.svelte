<script lang="ts">
    export let callSign: string;

    export let data;

    $: success = null || Boolean(callSign);

    const getApiKey = () => {
        if (callSign.length < 1) {
            console.log('No call sign entered');
            success = false;
            return;
        }
        console.log("Call sign entered: ", callSign);
    }

    // Do some external calls here to get the API key
</script>

<div class="bg-yellow-200">

    <form class="rounded-sm" on:submit={getApiKey}>
        <label for="callsign">Username/Callsign</label>
        <input type="text" placeholder="Call sign" aria-label="callsign" bind:value={callSign} />
    </form>

    {#if success === false}
        <p>There was an error</p>
    {:else if success === true}
        <p>Success!</p>
        {#await $data} <!-- Not sure if this works.. -->
            <p>Waiting...</p>
        {:then value}
            <p>The value is {value}</p>
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    {/if}


    <button type="submit" on:click={() => console.log(callSign)}>Submit</button>
</div>


<!-- TODO: Add the API key to a cookie and set it -->
