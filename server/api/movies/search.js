export default defineEventHandler((e) => {
    const {query, page} = getQuery(e);
    const config = useRuntimeConfig();
    return $fetch(`${config.apiBaseUrl}/search/movie?query=${query}&api_key=${config.apiKey}&page=${page}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${config.apiKey}`
        }
    })
})