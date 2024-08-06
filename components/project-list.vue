<template>
    <div class="repos max-w-4xl mx-auto p-6">
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="bg-green-500 px-4 py-3 border-b">
          <h2 class="text-2xl font-semibold text-white">Here's my list of Django projects on GitHub</h2>
        </div>
        <div class="px-6 py-4">
          <div class="grid md:grid-cols-3 gap-4 space-y-2">
            <UCard v-for="repo in filteredData" :key="repo.id">
              <template #header>
                <a :href="repo.html_url" target="_blank"> 
                  <div class="font-bold h-16">{{ repo.name }}</div>
                </a>
              </template>
              <div>
                <p>{{ repo.description }}</p>
              </div>
            </UCard>
          </div>
          <p v-if="pending" class="text-gray-500">Loading...</p>
          <p v-if="error" class="text-red-500">An error occurred while fetching the repositories.</p>
        </div>
      </div>
    </div>
  </template>

<script setup>
const { error, pending, data } = await useFetch('https://api.github.com/users/londolani/repos')

const filteredData = data.value.filter(repo => repo.name.toLowerCase().includes('django'))
</script>