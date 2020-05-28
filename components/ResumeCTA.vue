<template>
  <div class="bg-gray-50">
    <div class="max-w-screen-xl mx-auto py-12 px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl leading-9 font-semibold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Want to know more?
      </h2>
      <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
        <div class="inline-flex rounded-md shadow">
          <a :href="resumeURL" download target="_blank" rel="noreferrer noopener" class="inline-flex items-center justify-center px-5 py-3 text-base border border-transparent leading-6 font-medium rounded-md text-white bg-lightpink-600 hover:bg-lightpink-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Download my resume
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resumeURL } from '~/constants';

export default {
  data () {
    return {
      resumeURL,
    };
  },
};
</script>
