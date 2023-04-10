<script setup>
import HomeIcon from '../../assets/Icons/HomeIcon.vue';
defineProps(['mouseOut', 'title', 'description'])
</script>

<template>
    <div>
        <div class="flex items-center overflow-hidden">
            <span class="border p-5 rounded-full cursor-pointer mr-2 duration-100"
                :class="{ 'border-[#ff650xx0] bg-[#ff6500]': mouseOut, 'order-2 mr-0': title.includes('Half') || title.includes('Energy') }">
                <HomeIcon class="w-[50px] h-auto duration-500" :class="{ '-translate-y-20': mouseOut }" />
                <HomeIcon
                    :class="`h-auto absolute duration-1000 text-white ${mouseOut ? '-translate-y-[50px] w-12' : 'translate-y-10 w-0 border-[#ff6500]'}`" />
            </span>
            <div>
                <h4 :class="`cursor-pointer w-40 ${mouseOut ? 'text-[#ff6500]' : ''}`">{{ title }}</h4>
                <p class="text-slate-400 w-[11rem]">{{ description }}</p>
            </div>
        </div>
    </div>
</template>
