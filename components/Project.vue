<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="relative">
      <slot name="media" />
      <div v-if="award" class="absolute right-0 top-0 mt-4 flex items-center justify-start w-32">
        <svg class="h-12" viewBox="0 0 24 24" fill="#8E4162"><path d="M12 3c-2.205 0-4 1.794-4 4s1.795 4 4 4 4-1.794 4-4-1.795-4-4-4zm1.236 5.804l-1.236-.661-1.236.661.247-1.38-1.011-.971 1.389-.191.611-1.262.611 1.261 1.389.192-1.011.971.247 1.38zm-1.236-8.804c-3.865 0-7 3.134-7 7s3.135 7 7 7 7-3.134 7-7-3.135-7-7-7zm0 12c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm4.498 2.615c.296 3.12 1.346 5.449 3.502 7.695-.854.107-1.95-.094-2.833-.56-.317.636-.65 1.43-.767 2.25-2.001-2.291-3.267-5.03-3.741-8.033 1.416-.116 2.729-.595 3.839-1.352zm-5.157 1.352c-.474 3.003-1.74 5.742-3.741 8.033-.116-.82-.449-1.614-.767-2.25-.883.465-1.979.667-2.833.56 2.156-2.246 3.21-4.571 3.506-7.692 1.11.755 2.421 1.233 3.835 1.349z"/></svg>
        <span class="text-xs text-pink-500">Winner at cmd-f!</span>
      </div>
    </div>
    <div class="flex-1 bg-white p-8 flex flex-col justify-between">
      <div>
        <div class="flex">
          <div class="mb-3">
            <p class="text-sm leading-5 font-medium text-lightpink-600">
              {{ category }}
            </p>
            <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900s">
              {{ title }}
            </h3>
          </div>
        </div>
        <p class="text-base leading-7 text-gray-600 mt-2">
          <slot name="description" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['award', 'category', 'title'],
};
</script>
