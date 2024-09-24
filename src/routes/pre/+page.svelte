<script>
  export let data
</script>

{#await data.items}
	Loading items...
{:then items}
	{#each items as item}
		<p>{item.name}</p>
	{/each}
{:catch error}
	<p>error loading items: {error.message}</p>
{/await}
