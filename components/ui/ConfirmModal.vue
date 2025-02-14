<script setup lang="ts">
defineProps<{
  modelValue: boolean
  title: string
  message: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'confirm'): void
  (e: 'cancel'): void
}>()
</script>

<template>
  <Teleport to="body">
    <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div
          v-if="modelValue"
          class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          @click="$emit('update:modelValue', false)"
      >
        <div
            class="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
            @click.stop
        >
          <h3 class="text-lg font-medium mb-4">{{ title }}</h3>
          <p class="text-gray-600 mb-6">{{ message }}</p>
          <div class="flex justify-end space-x-3">
            <button
                @click="$emit('cancel')"
                class="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button
                @click="$emit('confirm')"
                class="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
