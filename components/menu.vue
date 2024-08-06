<template>
    <UHorizontalNavigation :links="links" class="px-4 border-b border-gray-400" />
</template>

<script setup lang="ts">
const links =[{
        label: 'Home',
        icon: 'i-heroicons-home',
        to: '/'
    },
    {
        label: 'About',
        icon: 'i-heroicons-user',
        to: '/about'
    },
    {
        label: 'Projects',
        icon: 'i-heroicons-command-line',
        to: '/projects'
    },
    {
        label: 'Experience',
        icon: 'i-heroicons-academic-cap',
        to: '/experience'
    },
    {
        label: 'Contact',
        icon: 'i-heroicons-envelope',
        to: '/contact'
    }
]
</script>