# Heap Process Bar

## Features

![](img/show.gif)

## Installation

Using [npm](https://www.npmjs.com/wkevin/heap-process-bar):

```
  $ npm install heap-process-bar --save
```

Using yarn:

```
  $ yarn add heap-process-bar
```

## Usage

```js
<template>
<heap-process-bar :heaps="data" />
</template>

<script lang="ts" setup>
import {HeapProcessBar} from "heap-process-bar";
const data = reactive([0, 0, 0])
// change data values
</script>
```

more detail in [example/src/App.vue](./example/src/App.vue)

## Dev

```sh
$ git clone https://github.com/wkevin/heap-process-bar
$ cd heap-process-bar
$ npm i
$ npm run build --workspace component
$ npm run dev --workspace example
```
