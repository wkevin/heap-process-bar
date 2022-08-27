<template>
  <div class="hpbs">
    <table>
      <tr>
        <th style="width:40%"></th>
        <th style="width:60%"></th>
      </tr>
      <tr>
        <td>
          <h2>数据</h2>
        </td>
      </tr>
      <tr>
        <td>3 元素数组</td>
        <td>
          <heap-process-bar :heaps="heaps" />
        </td>
      </tr>
      <tr>
        <td>5 元素数组</td>
        <td>
          <heap-process-bar :heaps="heaps1" />
        </td>
      </tr>

      <tr>
        <td>
          <h2>信息显示</h2>
        </td>
      </tr>
      <tr>
        <td>显示数字（默认）</td>
        <td>
          <heap-process-bar :heaps="heaps" />
        </td>
      </tr>
      <tr>
        <td>显示百分比（:showpercent="true"）</td>
        <td>
          <heap-process-bar :heaps="heaps" :showpercent="true" />
        </td>
      </tr>
      <tr>
        <td>不显示（:shownumber="false"）</td>
        <td>
          <heap-process-bar :heaps="heaps" :shownumber="false" />
        </td>
      </tr>


      <tr>
        <td>
          <h2>LastItem</h2>
        </td>
      </tr>
      <tr>
        <td>不显示数字（:showlastnumber="false"）</td>
        <td>
          <heap-process-bar :heaps="heaps" :showlastnumber="false" />
        </td>
      </tr>
      <tr>
        <td>完全不显示（:showlastitem="false"）</td>
        <td>
          <heap-process-bar :heaps="heaps" :showlastitem="false" />
        </td>
      </tr>


      <tr>
        <td>
          <h2>颜色</h2>
        </td>
      </tr>
      <tr>
        <td>颜色全部随机（:colors="[ ]" ）</td>
        <td>
          <heap-process-bar :heaps="heaps1" :colors="[]" />
        </td>
      </tr>
      <tr>
        <td>颜色部分随机（:colors="['blue', 'green']"）</td>
        <td>
          <heap-process-bar :heaps="heaps1" :showlastitem="false" :colors="['blue', 'green']" />
        </td>
      </tr>


      <tr>
        <td>
          <h2>Others</h2>
        </td>
      </tr>
      <tr>
        <td>行高可配（:height="35" ）</td>
        <td>
          <heap-process-bar :heaps="heaps" :height="35" />
        </td>
      </tr>
    </table>


  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { HeapProcessBar } from 'heap-process-bar'

const total = 100
const heaps = reactive([0, 0, 0])
const heaps1 = reactive([0, 0, 0, 0, 0])
heaps1.forEach((_, i) => {
  heaps1[i] = 0
})
const min = 0
const max = 10

setInterval(() => {
  if (heaps[2] <= 0) {
    heaps[0] = 0
    heaps[1] = 0
  }
  heaps[0] += Math.round(Math.random() * (max - min))
  heaps[1] += Math.round(Math.random() / 6 * (max - min))
  heaps[2] = total - heaps[0] - heaps[1]

  heaps1.forEach((_, i) => {
    heaps1[i] += Math.round(Math.random() * (max - min))
  })
}, 500)
</script>

<style scoped>
.hpbs {
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 12px;
}

h2 {
  text-align: left;
  margin: 0;
}

td {
  text-align: right;
  margin: 0;
}
</style>
