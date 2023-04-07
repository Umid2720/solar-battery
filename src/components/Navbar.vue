<script setup>
import Facebook from '../assets/Icons/FacebookIcon.vue';
import Linkedin from '../assets/Icons/LinkedinIcon.vue';
import Twitter from '../assets/Icons/TwitterIcon.vue';
import WhatsApp from '../assets/Icons/WhatsAppIcon.vue';
import Youtube from '../assets/Icons/YoutubeIcon.vue';

</script>

<template>
    <div class="container mx-auto mb-5">
        <div class="flex justify-between items-center">
            <div class="my-6">
                <img src="../assets/images/logo.png" alt="logo">
            </div>
            <div class="flex gap-x-4">
                <Facebook class="cursor-pointer duration-500 rotate-icon" />
                <WhatsApp class="cursor-pointer duration-500 rotate-icon" />
                <Twitter class="cursor-pointer duration-500 rotate-icon" />
                <Youtube class="cursor-pointer duration-500 rotate-icon" />
                <Linkedin class="cursor-pointer duration-500 rotate-icon" />
            </div>
        </div>
        <ul class="flex gap-x-10">
            <li class="hover:text-[#ff6500] duration-300"><router-link to="/">Home</router-link></li>
            <li class="hover:text-[#ff6500] duration-300"><router-link to="/company">Company</router-link></li>
            <li class="hover:text-[#ff6500] duration-300"><router-link to="/products">Products</router-link></li>
            <li class="hover:text-[#ff6500] duration-300"><router-link to="/company">Company</router-link></li>
            <li class="hover:text-[#ff6500] duration-300"><router-link to="/projects">Projects</router-link></li>
            <li class="hover:text-[#ff6500] duration-300"><router-link to="/news">News</router-link></li>
            <li class="hover:text-[#ff6500] duration-300"><router-link to="/downloads">Downloads</router-link></li>
            <li class="hover:text-[#ff6500] duration-300"><router-link to="/contact-us">Contact Us</router-link></li>
        </ul>
    </div>
</template> 

<style>
.rotate-icon:hover {
    transform: rotateY(180deg);
}
</style>