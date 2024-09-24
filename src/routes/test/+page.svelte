<script>
  export let data
</script>



{#each data.items as item}
  <p>{item.name}</p>
{/each}
