<script>
  let count = 0;
</script>

<div class="flex flex-col gap-2">
  <p>Count: {count}</p>
  <button
    on:click={() => {
      count += 1;
    }}>Increment</button
  >
</div>
