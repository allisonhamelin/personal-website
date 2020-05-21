<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <div class="md:pr-4 relative flex items-center justify-start sm:h-10">
            <SocialMediaLink social-media="github" label="GitHub" href="https://github.com/allisonhamelin" />
            <SocialMediaLink social-media="linkedIn" label="LinkedIn" class="ml-8" href="https://www.linkedin.com/in/allisonhamelin/" />
            <SocialMediaLink social-media="twitter" label="Twitter" class="ml-8" href="https://twitter.com/AllisonHamelin" />
            <SocialMediaLink social-media="angel" label="AngelList" class="ml-8" href="https://angel.co/u/allisonhamelin" />
          </div>
        </div>

        <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h2 class="tracking-tight leading-10 text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              <span class="font-semibold text-6xl">Allison Hamelin</span>
              <span class="block font-medium text-5xl text-lightpink-600">Front End Developer</span>
            </h2>
            <p class="leading-8 pt-3 text-lg text-gray-600 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
              I studied computer science at the University of British Columbia. While I was there I also fooled around with UBC A Capella and tried some tasty food with UBC Food Society. Nowadays I am building websites and continuing to learn (while drinking a ton of coffee). I'm interested in VR and curious about design. On my spare time I'm trying out new food spots, doing Zumba, taking long walks on the Vancouver Seawall, or cracking open a book.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/me.jpg" alt="">
    </div>
  </div>
</template>

<script>
import SocialMediaLink from '~/components/SocialMediaLink.vue';

export default {
  components: { SocialMediaLink },
};
</script>
