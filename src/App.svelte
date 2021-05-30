<script lang="ts">
	import ArrowRenderer from './ArrowRenderer.svelte';
	import FlexJustifyContentSet from './FlexJustifyContentSet.svelte';
	import FlexAlignItemsSet from './FlexAlignItemsSet.svelte';
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
  const onAlignItemsChange = (e) => ParentStore.changeAlignItems(e.detail.alignItems);
  const onJustifyContentChange = (e) => ParentStore.changeJustifyContent(e.detail.justifyContent);
</script>

<Tailwindcss />
<main>
  <Header />
  <!-- <section class="flex">
   
  </section>

  <section class="p-5 border-gray-500 border-2">
    
  </section> -->
  <div class="container">
    <div class="top flex-wrap flex-col md:flex-row">
      <ChildrenSet on:addChild={addChild} on:removeChild={removeChild} />
      <FlexDirectionSet
        direction={$ParentStore.flex_direction}
        on:directionChange={ondirectionChange}
      />
      <FlexWrapSet wrap={$ParentStore.flex_wrap} on:wrapChange={onWrapChange} />
      <FlexAlignItemsSet class="md:hidden" direction="horizontal" alignItems={$ParentStore.align_items} on:alignItemsChange={onAlignItemsChange} />
      <FlexJustifyContentSet direction="horizontal" class="md:hidden" justifyContent={$ParentStore.justify_content} on:justifyContentChange={onJustifyContentChange} />
    </div>
    <div class="left">
      <FlexAlignItemsSet class="md:flex hidden" alignItems={$ParentStore.align_items} on:alignItemsChange={onAlignItemsChange} />
    </div>
    <div class="right">
      <FlexJustifyContentSet  class="md:flex hidden" justifyContent={$ParentStore.justify_content} on:justifyContentChange={onJustifyContentChange} />
    </div>
    <div class="bottom"></div>
    <div class="center">
      <FlexRenderer flexOptions={$ParentStore} children={$ChildrenStore} />
    </div>
    <div class="top-arrow">
     <ArrowRenderer type="horizontal" directon={$ParentStore.flex_direction} />
    </div>
    <div class="left-arrow">
      <ArrowRenderer type="vertical" directon={$ParentStore.flex_direction} />
    </div>
    <div class="right-arraw">
      <ArrowRenderer type="vertical" directon={$ParentStore.flex_direction} />
    </div>
    <div class="bottom-arrow">
      <ArrowRenderer type="horizontal" directon={$ParentStore.flex_direction} />
    </div>
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
@media (max-width:768px) {
  .container { 
    height: calc(100vh - 4rem + 500px);
    grid-template-columns: 0fr 0.2fr minmax(0, 3.8fr) 0.2fr 0fr;
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
