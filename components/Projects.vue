<template>
  <div class="relative bg-coffee-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Projects
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
          Here are some of the things I've been experimenting with.
        </p>
      </div>
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <Project image-src="/moodScreenshot.png" category="Hackathon" title="Mood Setter" description="Insert description here..." />
        <Project
          video-src="/demo.mp4"
          video-type="video/mp4"
          thumbnail-src="/christine.jpg"
          category="Personal"
          title='"Bring Christine to Work" Day'
          description="Insert description here..."
        />
        <Project image-src="/ecommerce.png" category="Academic" title="ChainXY E-Commerce Portal" description="Insert description here..." />
      </div>
    </div>
  </div>
</template>

<script>
import Project from '~/components/Project';

export default {
  components: { Project },
};
</script>
