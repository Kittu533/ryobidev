<script setup>
import { computed } from 'vue';
import { motion } from '@motionone/vue';

const props = defineProps({
  className: {
    type: String,
    default: ''
  }
});

const paths = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  // ...add all the paths from the React component
];

const combinedClass = computed(() => {
  return `absolute inset-0 flex h-full w-full items-center justify-center [mask-repeat:no-repeat] [mask-size:40px] ${props.className}`;
});
</script>

<template>
  <div :class="combinedClass">
    <svg
      class="pointer-events-none absolute z-0 h-full w-full"
      width="100%"
      height="100%"
      viewBox="0 0 696 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875"
        stroke="url(#paint0_radial_242_278)"
        stroke-opacity="0.05"
        stroke-width="0.5"
      />

      <motion
        v-for="(path, index) in paths"
        :key="`path-${index}`"
        :tag="'path'"
        :d="path"
        :stroke="`url(#linearGradient-${index})`"
        stroke-opacity="0.4"
        stroke-width="0.5"
      />

      <defs>
        <motion
          v-for="(_, index) in paths"
          :key="`gradient-${index}`"
          :tag="'linearGradient'"
          :id="`linearGradient-${index}`"
          :initial="{
            x1: '0%',
            x2: '0%',
            y1: '0%',
            y2: '0%'
          }"
          :animate="{
            x1: ['0%', '100%'],
            x2: ['0%', '95%'],
            y1: ['0%', '100%'],
            y2: ['0%', `${93 + Math.random() * 8}%`]
          }"
          :transition="{
            duration: Math.random() * 10 + 10,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: Math.random() * 10
          }"
        >
          <stop stop-color="#18CCFC" stop-opacity="0" />
          <stop stop-color="#18CCFC" />
          <stop offset="32.5%" stop-color="#6344F5" />
          <stop offset="100%" stop-color="#AE48FF" stop-opacity="0" />
        </motion>

        <radialGradient
          id="paint0_radial_242_278"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
        >
          <stop offset="0.0666667" stop-color="#d4d4d4" />
          <stop offset="0.243243" stop-color="#d4d4d4" />
          <stop offset="0.43594" stop-color="white" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
</template>