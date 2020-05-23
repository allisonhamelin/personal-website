<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div class="relative pb-16 z-10 bg-white lg:max-w-2xl lg:w-full">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-start sm:h-10 md:pr-4">
            <SocialMediaLink social-media="github" label="GitHub" href="https://github.com/allisonhamelin" />
            <SocialMediaLink social-media="linkedIn" label="LinkedIn" class="ml-6 sm:ml-8" href="https://www.linkedin.com/in/allisonhamelin/" />
            <SocialMediaLink social-media="twitter" label="Twitter" class="ml-6 sm:ml-8" href="https://twitter.com/AllisonHamelin" />
            <SocialMediaLink social-media="angel" label="AngelList" class="ml-6 sm:ml-8" href="https://angel.co/u/allisonhamelin" />
            <img class="absolute h-12 w-12 right-0 sm:mt-2 object-cover lg:hidden sm:h-16 sm:w-16 rounded-full shadow-md" src="/avatar.jpg" alt="" />
          </div>
        </div>

        <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h2 class="tracking-tight leading-10 text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              <span class="font-semibold text-6xl">Allison Hamelin</span>
              <span class="block font-medium text-5xl text-lightpink-600">Front End Developer</span>
            </h2>
            <p :style="{maxWidth: '94%'}" class="leading-8 text-lg text-gray-600 my-5 sm:mx-auto lg:mx-0">
              I studied computer science at the University of British Columbia. While I was there I also fooled around a bunch with UBC A Capella. Nowadays I am building websites and continuing to learn (while drinking a ton of coffee). I'm interested in VR and curious about design. On my spare time I'm trying out new food spots, doing Zumba, taking long walks on the Vancouver Seawall, or cracking open a book. I am aiming to acquire solid foundations in core skills and gain experience with modern tools and frameworks such as React and Vue.js, possibly in the education or mental health tech industries.
            </p>
            <div class="inline-flex rounded-md shadow">
              <a href="https://firebasestorage.googleapis.com/v0/b/allison-hamelin.appspot.com/o/public%2FResume.pdf?alt=media&token=f8630424-858d-40e2-8187-afcd99fadf67" download target="_blank" rel="noreferrer noopener" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-lightpink-600 hover:bg-lightpink-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Download my resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover object-center sm:h-72 md:h-96 lg:w-full lg:h-full" src="/me.jpg" alt="">
    </div>
  </div>
</template>

<script>
import SocialMediaLink from '~/components/SocialMediaLink.vue';

export default {
  components: { SocialMediaLink },
};
</script>
