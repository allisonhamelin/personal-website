<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div v-if="imageSrc" class="flex-shrink-0">
      <img class="h-64 w-full object-cover" :src="imageSrc" alt="">
    </div>
    <div v-else-if="videoSrc">
      <video class="h-64 w-full object-cover" :poster="thumbnailSrc" controls>
        <source :src="videoSrc" :type="videoType" />
      </video>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between text-center">
      <div class="flex-1">
        <p class="text-sm leading-5 font-medium text-pink-600">
          <span>
            {{category}}
          </span>
        </p>
        <a href="#" class="block">
          <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
            {{title}}
          </h3>
          <p class="mt-3 text-base leading-6 text-gray-500">
            {{description}}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageSrc', 'videoSrc', 'videoType', 'thumbnailSrc', 'category', 'title', 'description'],
};
</script>
