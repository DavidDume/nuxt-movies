<template>
    <div class="flexflex-col px-20 mt-20">
        <div class="grid grid-cols-7 gap-1">
            <img :src="imgUrl" class="col-span-2" alt="">
            <div class="flex flex-col col-span-3">
                <div class="text-4xl font-sans font-bold mb-5">
                    {{ data?.title }}
                </div>
                <div class="flex">
                    <div v-for="genre in data?.genres" class="px-4 py-2 bbg-gray-200 text-gray-800 rounded mr-2 mb-2">
                        {{ genre.name }}
                    </div>
                </div>
                <div class="text-lg my-2">Release Date: {{ data?.release_date }}</div>
                <div class="text-lg mb-2">Duration: {{ data?.runtime }}</div>
                <p class="text-gray-600 text-md">{{ data?.overview }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Movie } from '~~/types/Movie';

    
    const route = useRoute();
    const config = useRuntimeConfig();
    const movieId = computed(() => route.params.id);

    const {data} = await useFetch<Movie>(`/api/movies/${movieId.value}`);

    const imgUrl = computed(() => data.value?.poster_path ? `${config.public.imgBaseURL}/${data.value.poster_path}` : 'https://viw.placeholder.com/300x500');


</script>