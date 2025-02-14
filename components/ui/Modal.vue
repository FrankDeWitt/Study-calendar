<script setup lang="ts">
defineProps<{
  modelValue: boolean
  title: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
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
          class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4"
          @click="$emit('update:modelValue', false)"
      >
        <div
            class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            @click.stop
        >
          <div class="flex justify-between items-center p-4 border-b">
            <h2 class="text-lg font-semibold">{{ title }}</h2>
            <button
                @click="$emit('update:modelValue', false)"
                class="text-gray-500 hover:text-gray-700"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="p-4">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>