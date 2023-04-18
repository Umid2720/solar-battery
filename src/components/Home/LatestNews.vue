<script setup>
import { ref } from 'vue';
import NewsItem from './NewsItem.vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

const isShow1 = ref(true)
const isShow2 = ref(false)
const isShow3 = ref(false)
const modules = ref([Navigation, Pagination])
const boxImage = ref([
    {
        data: "March 06, 2023", title: "Sunrover congratulates all women in the photovoltaic industry and women all over the world, Happy Women", text: "Sunrover congratulates all women in the photovoltaic industry and women all over the world, Happy Women's Day! The photovoltaic industry is getting stronger and stronger due to the addition of female power! Blooming bright like a rose! At the same time, Sunrover launched all black shingled 410W/all black shingled solar panel 415W stock, JA black frame solar panel 405W/415W and silver frame 410W stock. Please contact us if needed. E-mail: info@sunroverpv.com Whatsapp:+86 18326173291"
    },
    {
        data: "March 02, 2023", title: "Hospital roof distributed 169.29KW photovoltaic engineering case in Hefei, Anhui, China", text: "The distributed photovoltaic construction on the roof of the hospital in Hefei City, Anhui Province, China has been completed, with a total capacity of 169.29KW. The sunrover 550W solar panel is used to generate power for the entire hospital's operating load."
    },
    {
        data: "March 02, 2023", title: "Hospital roof distributed 169.29KW photovoltaic engineering case in Hefei, Anhui, China", text: "The distributed photovoltaic construction on the roof of the hospital in Hefei City, Anhui Province, China has been completed, with a total capacity of 169.29KW. The sunrover 550W solar panel is used to generate power for the entire hospital's operating load."
    },
    {
        data: "March 02, 2023", title: "Hospital roof distributed 169.29KW photovoltaic engineering case in Hefei, Anhui, China", text: "The distributed photovoltaic construction on the roof of the hospital in Hefei City, Anhui Province, China has been completed, with a total capacity of 169.29KW. The sunrover 550W solar panel is used to generate power for the entire hospital's operating load."
    },
    {
        data: "February 07, 2023", title: "The 1.8MW roof and photovoltaic carport project in Hefei, Anhui Province, China was completed", text: "The 1.8MW roof and photovoltaic carport project in Hefei, Anhui Province, China was completed. The overall project uses Trina 455W solar panel,the inverter uses Growatt, Costa, and Huawei on grid inverters, which is divided into 13 roof photovoltaic and carport photovoltaic projects. The overall project adopts the on grid system, which generates about 50 million kWh per year and saves about 18.02 million tons of coal. &nbsp;"
    }
])
</script>

<template>
    <div>
    <h2 class="text-center text-2xl">Latest News
        <span class="bg-[#ff6500] block my-2 h-1 rounded mx-auto w-24"></span>
        </h2>
        <p class="text-center text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eaque.</p>
        <div class="flex justify-center gap-x-36 my-8">
            <router-link to="" @click="isShow1 = true, isShow2 = isShow3 = false"
                class="text-slate-500 pb-2 hover:text-[#ff6500]"
                :class="{ 'base-color border-b-4 border-[#ff6500]': isShow1 }">Company News</router-link>
            <router-link to="" @click="isShow2 = true, isShow1 = isShow3 = false"
                class="text-slate-500 pb-2 hover:text-[#ff6500]"
                :class="{ 'base-color border-b-4 border-[#ff6500]': isShow2 }">Industry
                News</router-link>
            <router-link to="" @click="isShow3 = true, isShow1 = isShow2 = false"
                class="text-slate-500 pb-2 hover:text-[#ff6500]"
                :class="{ 'base-color border-b-4 border-[#ff6500]': isShow3 }">Mission &
                Vission</router-link>
        </div>
        <div class="container mx-auto">
            <swiper v-if="isShow1" :slidesPerView="3" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(image, index) in boxImage" :key="index" class="h-96">
                    <NewsItem :imgSource="index + 1" :date="image.data" :title="image.title" :text="image.text" />
                </swiper-slide>
            </swiper>
            <swiper v-if="isShow2" :slidesPerView="3" :modules="modules" class="mySwiper">
                <swiper-slide v-for="(image, index) in boxImage" :key="index" class="h-96">
                    <!-- <NewsItem :imgSource="index + 1" :date="image.data" :title="image.title" :text="image.text" /> -->
                    {{ image }}
                </swiper-slide>
            </swiper>
            <swiper v-if="isShow3" :slidesPerView="3" :modules="modules" class="mySwiper">
                <!-- <swiper-slide v-for="(image, index) in boxImage" :key="index" class="h-96">
                                                <NewsItem :imgSource="index + 1" :date="image.data" :title="image.title" :text="image.text" />
                                            </swiper-slide> -->
                men show 3 dan man!!!
            </swiper>
        </div>
    </div>
</template>

<style>
/* a.router-link-active {
    color: #ff6500;
    border-bottom: 4px solid #ff6500;
} */
</style>