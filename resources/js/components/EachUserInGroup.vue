<template>
    <div class="flex-1 w-full bg-gray-100 rounded-xl px-3 py-2 flex items-center gap-5 justify-between">
        <span>{{ props.user.name }}</span>
        <div>
            <button class="px-3 py-2 text-xs rounded-xl bg-green-500 text-white">افزودن به دوستان</button>
        </div>
    </div>
</template>

<script setup> 
let props = defineProps(['user']);
</script>

<style>

</style>