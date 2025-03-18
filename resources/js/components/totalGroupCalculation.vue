<template>
  <div class="mt-3">
    <div class="w-full rounded-xl flex items-center justify-between">
        <h3 class="text-xl">لیست خرج ها</h3>
    </div>
    <div class="grid grid-cols-1 gap-5 mt-5 px-5">
        <div class="col-span-1">
            <div v-if="!loading" class="rounded-xl grid md:grid-cols-3 gap-5 grid-cols-2">
                <div v-for="total in steps" :key="total" class="col-span-1 text-sm">
                    <router-link :to="{ name: 'ShowTotalPublicCalculation', params: { id: total, group_id: props.group.id } }" class="w-full">
                        <div class="rounded-xl w-full p-5 border">
                            <span class="text-center text-sm">محاسبات مرحله {{ total }}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
  </div> 
</template>

<script setup>

import { ref, onMounted, defineProps } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps(['group']);

let steps = ref([]);

const fetchAllSteps = () => {
  store.dispatch('fetchPublicSteps', { id: props.group.id })
    .then(() => {
      steps.value = store.state.publicExpense.steps;
    })
}

onMounted(() => {
  fetchAllSteps();
})

</script>

<style>

</style>