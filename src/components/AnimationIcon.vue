<script setup>
import { ref } from 'vue'
const isHover = ref(false)
</script>

<template>
    <span @mouseenter="isHover = true" @mouseleave="isHover = false" :class="{ 'bounce': isHover }">
        <slot></slot>
    </span>
</template>
<style>
.bounce {
    animation: mymove .5s linear 1;
}

@keyframes mymove {
    from {
        transform: rotateY(180deg);
    }

    to {
        transform: rotateX(0);
    }
}
</style>