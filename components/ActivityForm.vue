
<script setup lang="ts">
import { ref } from 'vue'
import type { ActivityType } from '~/types/schedule'
import { useScheduleStore } from '~/stores/schedule'

const store = useScheduleStore()
const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const formData = ref({
  day: days[0],
  activity: '',
  time: '',
  duration: '',
  type: 'japanese' as ActivityType
})

const emit = defineEmits<{
  (e: 'added'): void
  (e: 'cancel'): void
}>()

const handleSubmit = async () => {
  const { day, ...activityData } = formData.value
  await store.addActivity(day, activityData)

  // Reset form
  formData.value = {
    day: days[0],
    activity: '',
    time: '',
    duration: '',
    type: 'japanese' as ActivityType
  }

  emit('added')
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 p-4 bg-white rounded-lg shadow">
    <div>
      <label class="block text-sm font-medium text-gray-700">Día</label>
      <select
          v-model="formData.day"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Actividad</label>
      <input
          v-model="formData.activity"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Horario</label>
      <input
          v-model="formData.time"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Duración</label>
      <input
          v-model="formData.duration"
          type="text"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Tipo</label>
      <select
          v-model="formData.type"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="japanese">Japonés</option>
        <option value="typescript">TypeScript</option>
        <option value="hacking">Hacking</option>
      </select>
    </div>

    <div class="flex space-x-3">
      <button
          type="submit"
          class="flex-1 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Añadir Actividad
      </button>
      <button
          type="button"
          @click="$emit('cancel')"
          class="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
      >
        Cancelar
      </button>
    </div>
  </form>
</template>
