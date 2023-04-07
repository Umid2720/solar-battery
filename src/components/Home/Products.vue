<script setup>
import { ref } from 'vue'
import ProductsItem from './ProductsItem.vue';

const imgSource = ref(1)
const mouseOne = ref(false)
const mouseTwo = ref(false)
const mouseThree = ref(false)
const mouseFour = ref(false)

const productFunction = (val) => {
    if (val == 1) {
        mouseTwo.value = mouseThree.value = mouseFour.value = false
        mouseOne.value = true
        imgSource.value = 1
    }
    else if (val == 2) {
        mouseOne.value = mouseThree.value = mouseFour.value = false
        mouseTwo.value = true
        imgSource.value = 2
    }
    else if (val == 3) {
        mouseTwo.value = mouseOne.value = mouseFour.value = false
        mouseThree.value = true
        imgSource.value = 3
    }
    else if (val == 4) {
        mouseTwo.value = mouseOne.value = mouseThree.value = false
        mouseFour.value = true
        imgSource.value = 4
    }
}

</script>

<template>
    <div class="py-10 relative 2xl:mx-[25%] xl:mx-[20%] lg:mx-[15%] mx-auto mx-10">
        <h2 class="text-center text-3xl">SUNROVER</h2>
        <img :src="'src/assets/images/panel' + imgSource + '.jpg'" :alt="'panel' + imgSource"
            class="h-80 absolute -translate-x-1/2 left-1/2 right-1/2 mt-14 duration-300 hidden lg:block">
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div class="flex justify-between my-20">
            <ProductsItem :mouseOut="mouseOne" :title="'Solar System'"
                :description="'on grid, off grid and hybrid battery storage'" @mouseenter="productFunction(1)" />
            <ProductsItem :mouseOut="mouseTwo" :title="'Half Cell Solar Panels'"
                :description="'Sunrover half cell solar panels wisth CE and TUV'" @mouseenter="productFunction(2)" />
        </div>
        <div class="flex justify-between">
            <ProductsItem :mouseOut="mouseThree" :title="'Solar Inverter'"
                :description="'Grid-tried string inverter 1.5KW-110KW, energy'" @mouseenter="productFunction(3)" />
            <ProductsItem :mouseOut="mouseFour" :title="'Energy Storage Battery'"
                :description="'Catl cells long warranty lithium battery fo'" @mouseenter="productFunction(4)" />
        </div>
    </div>
</template>

<style></style>