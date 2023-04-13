
<script setup>
import MoreButton from '../MoreButton.vue';
</script>

<template>
    <div class="bg-white relative mb-[500px]">
        <div class="bg-[url('src/assets/images/bgtunt.jpg')] bg-center h-80 bg-no-repeat bg-cover">
            <div class="w-3/4 mx-auto pt-10">
                <h3 class="text-2xl">Project <span class="font-bold text-4xl text-[#ff6500]">Worldide</span></h3>
                <div class="-mt-10">
                    <div v-for="item in 3"
                        class="relative ml-auto mb-5 border border-white w-96 overflow-hidden hover:scale-[1.1] duration-300 group">
                        <img :src="'src/assets/images/box-img' + item + '.jpg'" alt="" class="w-96 cursor-pointer">
                        <p
                            class="text-center absolute w-96 h-0 left-0 right-0 bg-[#00000059] text-white text-3xl pt-5 duration-300 group-hover:top-0 group-hover:h-full cursor-pointer">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero sit eveniet.</p>
                    </div>
                    <div class="absolute -bottom-72 w-96">
                        <h3 class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                            cupiditate ducimus nemo</h3>
                        <ul class="list-disc py-5 ml-5">
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <MoreButton />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
li::marker {
    color: #ff6500;
}
</style>