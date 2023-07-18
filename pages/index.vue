<template>

    <div class="flex flex-col py-10">
        <div>
            <h2 class="text-2xl font-bold text-center">Movies</h2>
        </div>
        <div class="flex justify-center items-center h-32">
            <input class="px-2 py-1 border border-gray-800 rounded min-w-64" type="text" v-model="searchTerm" placeholder="Search...">
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 self-center gap-x-10 gap-y-10 mb-10">
            <div v-for="movie in data?.results">
            <MovieCard :movie="movie"></MovieCard>
            </div>
        </div>
        <div class="flex justify-center" v-if="data?.results.length" > 
            <button @click="page--" v-if="!disabledPrev" class="px-4 py-2 text-md border rounded">Prev</button>
            <div class="px-4 py-2 text-md border rounded">{{ page }}</div>
            <button @click="page++" v-if="!disabledNext" class="px-4 py-2 text-md border rounded">Next</button>
        </div>
    </div>

</template>

<script setup lang="ts">

import { APIResponse } from '~~/types/APIResponse';
    const searchTerm = ref('');

    const page= ref(1);

    const disabledPrev = computed(() => {
        return page.value === 1; 
    })

    const disabledNext = computed(() => {
        return page.value + 1 === data.value?.total_pages; 
    })
    
    const debouncedSearchTerm = refDebounced(searchTerm, 700);
    
    const url = computed(() => {
        return `api/movies/search?query=${debouncedSearchTerm.value}&page=${page.value}`
    })

    const {data} = await useFetch<APIResponse>(url);
</script>
