<script lang="ts">
	import ChildSet from './ChildSet.svelte';
	import GapSet from './GapSet.svelte';
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
  const onGapChange = (e) => ParentStore.changeGap(e.detail.gap);

  const onChildSelected = (e) => ChildrenStore.selectChild(e.detail)
  const onIncreaseOrder = (e) => ChildrenStore.increaseOrder(e.detail.id);
  const onDecreaseOrder = (e) => ChildrenStore.decreaseOrder(e.detail.id);
  const onIncreaseFlexGrow = (e) => ChildrenStore.increaseFlexGrow(e.detail.id);
  const onDecreaseFlexGrow = (e) => ChildrenStore.decreaseFlexGrow(e.detail.id);
  const onIncreaseFlexShrink = (e) => ChildrenStore.increaseFlexShrink(e.detail.id);
  const onDecreaseFlexShrink = (e) => ChildrenStore.decreaseFlexShrink(e.detail.id);
  const onChangeFlexBasis = (e) => ChildrenStore.setFlexBasis(e.detail.child.id, e.detail.flexBasis);


</script>

<Tailwindcss />
<main>
  <Header />
  <div class="container sm:max-w-none">
    <div class="top flex-row flex-nowrap md:flex-wrap overflow-x-scroll md:overflow-x-auto" style="height: fit-content;">
      <ChildrenSet children={$ChildrenStore.children} on:addChild={addChild} on:removeChild={removeChild} />
      <GapSet gap={$ParentStore.gap} on:gapChange={onGapChange} />
      <FlexDirectionSet direction={$ParentStore.flex_direction} on:directionChange={ondirectionChange} />
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
    <div class="bottom flex-wrap flex-col md:flex-row">
      {#if $ChildrenStore.selectedChild}
         <ChildSet 
         child={$ChildrenStore.selectedChild} 
         on:increaseOrder={onIncreaseOrder} on:decreaseOrder={onDecreaseOrder}
         on:increaseFlexGrow={onIncreaseFlexGrow} on:decreaseFlexGrow={onDecreaseFlexGrow} 
         on:increaseFlexShrink={onIncreaseFlexShrink} on:decreaseFlexShrink={onDecreaseFlexShrink}
         on:changeFlexBasis={onChangeFlexBasis} />
      {/if}
    </div>
    <div class="center">
      <FlexRenderer flexOptions={$ParentStore} children={$ChildrenStore.children} selectedChild={$ChildrenStore.selectedChild} on:childSelected={onChildSelected} />
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
  height: calc(100vh - 3rem);
  display: grid;
  grid-template-columns: 0.7fr 0.2fr minmax(0, 3.8fr) 0.2fr 0.7fr;
  grid-template-rows: 0.7fr 0.2fr minmax(0, 3.8fr) 0.2fr 0.4fr;
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
    grid-template-columns: 0fr 0.1fr minmax(0, 3.8fr) 0.1fr 0fr;
    grid-template-rows: 0.7fr 0.1fr minmax(0, 3.8fr) 0.1fr 0.4fr;
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
