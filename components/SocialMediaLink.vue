<template>
  <a :href="href" class="flex font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
    <img class="w-6 mr-1" :src="imageSrc" alt="">
    {{ label }}
  </a>
</template>

<script>

export default {
  props: {
    imageSrc: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>
