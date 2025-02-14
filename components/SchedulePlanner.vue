<script setup lang="ts">
import draggable from 'vuedraggable'
import { useScheduleStore } from '~/stores/schedule'

const store = useScheduleStore()
const schedule = computed(() => store.schedule)
const showDeleteConfirm = ref(false)
const pendingDelete = ref<{ day: string; itemId: string } | null>(null)

const legendItems = {
  japanese: { bgClass: 'bg-pink-100 border-pink-300', label: 'Japonés' },
  typescript: { bgClass: 'bg-blue-100 border-blue-300', label: 'TypeScript' },
  hacking: { bgClass: 'bg-green-100 border-green-300', label: 'Hack4u' }
}

const confirmDelete = (day: string, itemId: string) => {
  pendingDelete.value = { day, itemId }
  showDeleteConfirm.value = true
}

const handleDeleteConfirm = async () => {
  if (pendingDelete.value) {
    await store.deleteActivity(pendingDelete.value.day, pendingDelete.value.itemId)
    showDeleteConfirm.value = false
    pendingDelete.value = null
  }
}

const handleDeleteCancel = () => {
  showDeleteConfirm.value = false
  pendingDelete.value = null
}

const getColorClass = (type: keyof typeof legendItems) => {
  return legendItems[type].bgClass
}

const handleDragChange = (event: any, day: string) => {
  if (event.added || event.moved) {
    store.updateDaySchedule(day, schedule.value.find(s => s.day === day)?.items || [])
  }
}
</script>

<template>
  <div class="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-md">
    <div class="p-6 border-b">
      <h2 class="text-2xl font-bold text-center">Planificador Semanal de Estudios</h2>
    </div>

    <div class="p-6">
      <div class="grid grid-cols-1 md:grid-cols-7 gap-4">
        <div v-for="day in schedule" :key="day.day" class="flex flex-col">
          <h3 class="text-lg font-semibold mb-2 text-center pb-2 border-b">{{ day.day }}</h3>

          <draggable
              v-model="day.items"
              :group="{ name: 'schedule', pull: true, put: true }"
              item-key="id"
              class="min-h-[100px] space-y-2"
              ghost-class="opacity-50"
              @change="handleDragChange($event, day.day)"
          >
            <template #item="{ element }">
              <div
                  class="relative p-2 rounded border transition-all hover:shadow-md group"
                  :class="getColorClass(element.type)"
              >
                <!-- Contenido de la tarjeta -->
                <div class="pr-8"> <!-- Añadimos padding-right para el botón -->
                  <p class="font-semibold text-sm">{{ element.activity }}</p>
                  <p class="text-xs text-gray-600">{{ element.time }}</p>
                  <p class="text-xs text-gray-600">{{ element.duration }}</p>
                </div>

                <!-- Botón de borrado -->
                <button
                    @click.stop="confirmDelete(day.day, element.id)"
                    class="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>

    <!-- Modal de confirmación de borrado -->
    <UiConfirmModal
        v-model="showDeleteConfirm"
        title="Confirmar eliminación"
        message="¿Estás seguro de que quieres eliminar esta actividad?"
        @confirm="handleDeleteConfirm"
        @cancel="handleDeleteCancel"
    >
    </UiConfirmModal>
  </div>
</template>