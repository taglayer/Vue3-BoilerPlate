<template>
  <div>
    <h1>Products Page</h1>
    {{ products }}
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const products = computed(() => store.state.products.list);

onMounted(async () => {
  await store.dispatch('products/fetch');
});
</script>
