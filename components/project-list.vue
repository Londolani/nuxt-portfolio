<template>
    <div>
        <h1>Here's my list of my projects on github</h1>
        <div class="grid md:grid-cols-3 gap-4 px-4 space-y-2 ">
            <UCard v-for="repo in data" :key="repo.id">
                <template #header>
                    <a :href="repo.html_url" target="_blank"> 
                        <div class="font-bold h-16">{{ repo.name }}</div>
                    </a>
                </template>
                <div>
                    <p> {{repo.description}} </p>
                </div>
            </UCard> 
        </div>
    </div>
</template>

<script setup>
const {error,pending,data} = await useFetch('https://api.github.com/users/londolani/repos')
</script>