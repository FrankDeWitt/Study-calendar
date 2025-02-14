<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <button
        @click="showModal = true"
        class="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition-colors flex items-center space-x-2"
    >
      <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
      >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v16m8-8H4"
        />
      </svg>
      <span>Nueva Actividad</span>
    </button>

    <UiModal
        v-model="showModal"
        title="Añadir Nueva Actividad"
    >
      <ActivityForm @added="handleActivityAdded" @cancel="showModal = false" />
    </UiModal>

    <SchedulePlanner />
  </div>
</template>
<script setup lang="ts">

const showModal = ref(false)

const handleActivityAdded = () => {
  showModal.value = false
}
</script>