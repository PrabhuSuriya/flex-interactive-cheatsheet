<script lang="ts">
  export let directon: string;
  export let type: string;
</script>

{#if type === "horizontal"}
  <div
    class="arrow horizontal flex-row"
    class:flex-row-reverse={directon === 'row-reverse'}
  >
    <div class="arrow-line">
      <span class="text">
        {directon.includes('row') ? 'Main Axis' : 'Cross Axis'}
      </span>
    </div>
    <div
      class="arrow-head"
      class:to-right={directon !== 'row-reverse'}
      class:to-left={directon === 'row-reverse'}
    />
  </div>
{:else}
  <div
    class="arrow vertical flex-col"
    class:flex-col-reverse={directon === 'column-reverse'}
  >
    <div class="arrow-line">
      <span class="text">
        {directon.includes('column') ? 'Main Axis' : 'Cross Axis'}
      </span>
    </div>
    <div
      class="arrow-head"
      class:to-bottom={directon !== 'column-reverse'}
      class:to-top={directon === 'column-reverse'}
    />
  </div>
{/if}

<style lang="scss">
  .arrow {
    width: 100%;
    display: flex;
    align-items: center;
    .arrow-line {
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        background-color: white;
        padding: 0 1rem;
      }
    }
    &.horizontal {
        padding: 0 2rem;
      .arrow-line {
        height: 2px;
        width: 100%;
      }
    }
    &.vertical {
        padding: 2rem 0;
      .arrow-line {
        height: 100%;
        width: 2px;
      }
      .text {
        writing-mode: vertical-lr;
        text-orientation: sideways;
        transform: rotateZ(180deg);
        padding: 1rem 0;
      }
    }
    .arrow-head {
      border-width: 0.5rem;
      border-color: white;
      border-style: solid;

      &.to-right {
        border-left-color: black;
      }
      &.to-left {
        border-right-color: black;
      }
      &.to-top {
        border-bottom-color: black;
      }
      &.to-bottom {
        border-top-color: black;
      }
    }
  }
</style>
