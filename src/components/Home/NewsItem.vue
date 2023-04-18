<script setup>
import PlayIcon from '../../assets/Icons/PlayIcon.vue';

defineProps(['imgSource', 'date', 'title', 'text'])
</script>

<template>
    <div class="max-w-[400px]">
        <div class="overflow-hidden">
            <img :src="'src/assets/images/box-img' + imgSource + '.jpg'"
                class="hover:scale-[1.1] cursor-pointer duration-300" alt="">
        </div>
        <div class="space-y-4">
            <p class="text-slate-500">{{ date }}</p>
            <a class="font-bold cursor-pointer underline duration-300 hover:text-[#ff6500]">{{ title }}</a>
            <p class="text-slate-500 overflow-hidden h-24">{{ text }}</p>
            <div class="cursor-pointer hover:text-[#ff6500] duration-300 group flex items-center justify-between">
                <PlayIcon /> READ MORE <div class="duration-300 w-60 h-[1px] bg-gray-300 group-hover:bg-[#ff6500]"></div>
            </div>
        </div>
    </div>
</template>
