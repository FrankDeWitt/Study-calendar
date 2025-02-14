<!-- components/Header.vue -->
<template>
  <header class="bg-white shadow-md">
    <nav class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
            Logo
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
            class="md:hidden p-2 rounded-lg hover:bg-gray-100"
            @click="isMenuOpen = !isMenuOpen"
        >
          <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span class="block w-6 h-0.5 bg-gray-600 mb-1"></span>
          <span class="block w-6 h-0.5 bg-gray-600"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
          v-if="isMenuOpen"
          class="md:hidden mt-4 pb-4"
      >
        <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Acerca', path: '/about' },
  { name: 'Servicios', path: '/services' },
  { name: 'Contacto', path: '/contact' }
]
</script>