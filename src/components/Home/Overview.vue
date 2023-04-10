<script setup>
import HomeIcon from '../../assets/Icons/HomeIcon.vue';
import WorldIcon from '../../assets/Icons/WorldIcon.vue';

</script>

<template>
    <div class="relative">
        <div class="bg-[url('src/assets/images/bg.jpg')] bg-center h-80 bg-no-repeat bg-cover"></div>
        <div class="mx-auto w-96">
            <div class="bg-[#ff6500] py-6 px-16 text-center text-white absolute bottom-0">
                <HomeIcon class="mx-auto w-12 h-12" />
                <p class="mb-3">Home</p>
                <div class="w-10 h-10 absolute -bottom-3 rotate-45 bg-[#ff6500] z-10">
                </div>
            </div>
            <div
                class="bg-white ml-[200px] group py-6 px-16 text-center text-white absolute duration-500 cursor-pointer -bottom-10 hover:bottom-0 hover:bg-[#ff6500]">
                <WorldIcon class="mx-auto w-12 h-12 text-[#ff6500] group-hover:text-white" />
                <p class="mb-3">World</p>
                <div
                    class="w-10 duration-1000 h-10 absolute -bottom-8 rotate-45 bg-[#ff6500] group-hover:z-10 group-hover:-bottom-3">
                </div>
            </div>
            <div
                class="bg-white ml-[400px] group py-6 px-16 text-center text-white absolute duration-500 cursor-pointer -bottom-10 hover:bottom-0 hover:bg-[#ff6500]">
                <WorldIcon class="mx-auto w-12 h-12 text-[#ff6500] group-hover:text-white" />
                <p class="mb-3">Send</p>
                <div
                    class="w-10 duration-100 h-10 absolute -bottom-8 rotate-45 bg-[#ff6500] group-hover:z-10 group-hover:-bottom-3">
                </div>
            </div>
        </div>
    </div>
</template>