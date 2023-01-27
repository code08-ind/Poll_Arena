<script>
  // import { onMount, onDestroy } from "svelte";
  import {fade, slide, scale} from "svelte/transition";
  import {flip} from 'svelte/animate'
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore.js";

  // export let polls = [];

  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onMount(() => {
  //   // maybe get a data from db
  //   console.log("Component mounted");
  // });
  // onDestroy(() => {
  //   // maybe get a data from db
  //   console.log("Component destroyed");
  //   unsub();
  // });

</script>

<div class="poll-list">
  <!-- {#each polls as poll (poll.id)} -->
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{duration:500}}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
