<template>
    <!-- Search bar  -->
    <div class=" frbc gap-2 h-10 w-full  ">
        <div id="search" class=" frsc gap-2 flex-1 bg-gray-100 rounded-md px-2 w-full h-full ">
            <i-search-outline class=" text-sm    text-gray-400 " />
            <input type="text" class=" text-xs text-text outline-none bg-transparent " placeholder="Search Chair,Couch...">
        </div>

        <div id="filters" class=" bg-primary fccc w-10  h-full rounded-md ">
            <mj-filter class=" text-sm text-white " />
        </div>
    </div>
</template>

<script setup>

</script>
