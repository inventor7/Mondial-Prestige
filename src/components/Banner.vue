<template>
    <div class=" frbc p-4 bg-gray-100 rounded-md w-full">
        <div class=" space-y-2 h-full w-fit">
            <h2 class=" font-bold text-text text-lg ">New {{ text }}</h2>
            <p class=" text-xs text-gray-400 ">Discount 50% for the first transaction</p>
            <button class=" px-2 py-1 text-xs bg-primary rounded text-white ">Shop Now</button>
        </div>
        <img class=" max-w-[50%] w-full  " src="../assets/pngwing.png" alt="">
    </div>
</template>

<script setup>

const props = defineProps({
    text: {
        type: String,
    }
})

</script>
