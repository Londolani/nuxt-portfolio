<template>
    <div class="landing-page mx-auto p-8 bg-white shadow-lg max-w-4xl">
      <header class="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 text-center rounded-t-lg shadow-md">
        <h1 class="text-5xl font-extrabold">Londolani Ndou</h1>
        <p class="text-2xl mt-2">Software Engineer</p>
      </header>
      <main class="mt-6">
        <section class="introduction text-center mb-8">
          <p class="text-lg mb-4">Welcome to my personal portfolio, built using NuxtJS, a VueJS framework.</p>
          <div class="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/londolani-ndou-504242180" target="_blank" class="text-blue-700 hover:text-blue-900">
              <i class="fab fa-linkedin text-3xl"></i>
            </a>
            <a href="https://github.com/londolani" target="_blank" class="text-gray-800 hover:text-gray-900">
              <i class="fab fa-github text-3xl"></i>
            </a>
          </div>
        </section>
        <section class="activities">
          <h2 class="text-3xl font-semibold text-center mb-6">Here's what I get up to when I'm not coding:</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li class="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
              <p class="text-xl font-medium">Reading</p>
              <p class="text-gray-600">I love to immerse myself in books, expanding my knowledge and imagination.</p>
            </li>
            <li class="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
              <p class="text-xl font-medium">Playing Video Games</p>
              <p class="text-gray-600">Gaming is a great way to relax and challenge my strategic thinking.</p>
            </li>
            <li class="bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition">
              <p class="text-xl font-medium">Playing Tennis</p>
              <p class="text-gray-600">I enjoy staying active and competitive through tennis.</p>
            </li>
          </ul>
        </section>
      </main>
      <footer class="text-center mt-12 text-gray-600">
        <p>&copy; 2024 Londolani Ndou. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <style scoped>
  @import 'tailwindcss/tailwind.css';
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
  
  .header {
    background-image: linear-gradient(to right, #4CAF50, #3B873E);
  }
  
  .activities li {
    transition: background-color 0.3s ease;
  }
  </style>
  