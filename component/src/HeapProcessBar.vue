<template>
  <div class="HPB_Container" :style="{
    width: '100%', display: 'inline-flex', textAlign: 'center', overflow: 'hidden', height: height + 'px', lineHeight: height + 'px'
  }">
    <!-- <div v-for="(h, i) in heaps" :key="i" :style="'width:' + percents[i] + '%; background-color:' + colors[i] + ';'">
      {{ shownumber ? (showpercent ? (percents[i] + '%') : h) : '' }}
    </div> -->
    <div v-for="(h, i) in heaps" :key="i"
      :style="{ float: 'left', width: percents[i] + '%', backgroundColor: colors[i], fontSize: ((i === (heaps.length - 1) && (!showlastnumber || !showlastitem)) ? 0 : 'inherit') }">
      {{ shownumber ? (showpercent ? (percents[i] + '%') : h) : '' }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeapProcessBar",
};
</script>

<script lang="ts" setup>
import { processExpression } from '@vue/compiler-core';
import { computed, onMounted, PropType } from 'vue'
const props = defineProps({
  heaps: {
    type: Array as PropType<number[]>,
    required: true,
    default: () => [0, 0, 0],
  },
  colors: {
    type: Array as PropType<string[]>,
    default: () => ['#43A047', '#FF5252', '#383838'],
  },
  height: {
    type: Number,
    default: 15,
  },
  showpercent: {
    type: Boolean,
    default: false,
  },
  shownumber: {
    type: Boolean,
    default: true,
  },
  showlastnumber: {
    type: Boolean,
    default: true,
  },
  showlastitem: {
    type: Boolean,
    default: true,
  }
})

onMounted(() => {
  // 新增随机颜色
  if (props.heaps.length > props.colors.length) {
    let len = props.colors.length
    for (let i = 0; i < (props.heaps.length - len); i++) {
      props.colors.splice((len - 1 + i), 0, "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0"))
    }
  }
  // 最后元素不显示，将颜色设为透明
  if (!props.showlastitem) {
    props.colors[props.colors.length - 1] += '00'
  }
})

const total = computed(() => {
  let sum = 0
  props.heaps.forEach((h) => {
    if (h > 0) {
      sum += h
    }
  })
  return sum
})

const percents = computed(() => {
  let ps: number[] = []
  props.heaps.forEach((h) => {
    if (h > 0) {
      ps.push(Math.ceil(100 * h / total.value))
    } else {
      ps.push(0)
    }
  })
  return ps
})

</script> 

<style scoped>
</style>
