<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SparklesCore from '@/components/SparklesCore.vue';

const props = defineProps<{
  className?: string;
}>();

const slots = defineSlots<{
  default?: () => any;
}>();

const hovered = ref(false);
const containerRef = ref<HTMLDivElement | null>(null);
const containerWidth = ref(0);
const beamPositions = ref<number[]>([]);

onMounted(() => {
  if (containerRef.value) {
    containerWidth.value = containerRef.value.clientWidth;
    const height = containerRef.value.clientHeight;
    const numberOfBeams = Math.floor(height / 10);
    beamPositions.value = Array.from(
      { length: numberOfBeams },
      (_, i) => (i + 1) * (height / (numberOfBeams + 1))
    );
  }
});
</script>

<template>
  <div
    ref="containerRef"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
    class="relative hover:bg-neutral-900 group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2 transition duration-200 rounded-sm"
  >
    <Transition>
      <div v-if="hovered" class="h-full w-full overflow-hidden absolute inset-0">
        <div class="w-[200%] h-full flex">
          <SparklesCore
            background="transparent"
            :min-size="0.4"
            :max-size="1"
            :particle-density="500"
            class="w-full h-full"
            particle-color="#FFFFFF"
          />
          <SparklesCore
            background="transparent"
            :min-size="0.4"
            :max-size="1"
            :particle-density="500"
            class="w-full h-full"
            particle-color="#FFFFFF"
          />
        </div>
      </div>
    </Transition>

    <span
      :class="[
        'dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200',
        className
      ]"
    >
      <slot></slot>
    </span>

    <!-- Add corner circles -->
    <div class="absolute -right-[2px] -top-[2px] h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 group-hover/cover:hidden" />
    <div class="absolute -bottom-[2px] -right-[2px] h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 group-hover/cover:hidden" />
    <div class="absolute -left-[2px] -top-[2px] h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 group-hover/cover:hidden" />
    <div class="absolute -bottom-[2px] -left-[2px] h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 group-hover/cover:hidden" />
  </div>
</template>