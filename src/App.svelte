<script lang="ts">
	import FlexWrapSet from './FlexWrapSet.svelte';
  import FlexDirectionSet from "./FlexDirectionSet.svelte";
  import Tailwindcss from "./Tailwind.svelte";
  import Header from "./Header.svelte";
  import FlexRenderer from "./FlexRenderer.svelte";
  import ChildrenSet from "./ChildrenSet.svelte";
  import { ChildrenStore } from "./children-store";
  import { ParentStore } from "./parent-store";

  const parentProp = {};

  const addChild = () => ChildrenStore.addChild();
  const removeChild = () => ChildrenStore.removeChild();

  const ondirectionChange = (e) => ParentStore.changeDirection(e.detail.direction);
  const onWrapChange = (e) => ParentStore.changeWrap(e.detail.wrap);
</script>

<Tailwindcss />
<main>
  <Header />
  <!-- <section class="flex">
   
  </section>

  <section class="p-5 border-gray-500 border-2">
    
  </section> -->
  <div class="container">
    <div class="top flex-wrap">
      <ChildrenSet on:addChild={addChild} on:removeChild={removeChild} />
      <FlexDirectionSet
        direction={$ParentStore.flex_direction}
        on:directionChange={ondirectionChange}
      />
      <FlexWrapSet wrap={$ParentStore.flex_wrap} on:wrapChange={onWrapChange} />
    </div>
    <div class="left">
      LEFT OPTIONS
    </div>
    <div class="right">
      RIGHT OPTIONS
    </div>
    <div class="bottom"></div>
    <div class="center border-2">
      <FlexRenderer flexOptions={$ParentStore} children={$ChildrenStore} />
    </div>
    <div class="top-arrow"></div>
    <div class="left-arrow"></div>
    <div class="right-arraw"></div>
    <div class="bottom-arrow"></div>
  </div>
</main>

<style lang="scss">
 .container {
  height: calc(100vh - 4rem);
  display: grid;
  grid-template-columns: 0.7fr 0.2fr minmax(0, 3.8fr) 0.2fr 0.7fr;
  grid-template-rows: 0.4fr 0.2fr minmax(0, 3.8fr) 0.2fr 0.4fr;
  gap: 0px 0px;
  grid-template-areas:
    "top top top top top"
    ". . top-arrow . ."
    "left left-arrow center right-arraw right"
    ". . bottom-arrow . ."
    "bottom bottom bottom bottom bottom";
  >div {
    display: flex;
  }
}

.top { grid-area: top; }

.left { grid-area: left; }

.right { grid-area: right; }

.bottom { grid-area: bottom; }

.center { grid-area: center; }

.top-arrow { grid-area: top-arrow; }

.left-arrow { grid-area: left-arrow; }

.right-arraw { grid-area: right-arraw; }

.bottom-arrow { grid-area: bottom-arrow; }

</style>
