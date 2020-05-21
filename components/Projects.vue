<template>
  <div class="relative bg-coffee-100 py-24 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl leading-9 tracking-tight font-bold text-gray-900 sm:text-4xl sm:leading-10">
          Projects
        </h2>
        <p class="mt-3 max-w-3xl mx-auto text-xl leading-7 text-gray-600 sm:mt-4">
          Here are some of the things I've been experimenting with lately.
        </p>
      </div>
      <div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <Project :award="true" image-src="/moodScreenshot.png" category="Hackathon" title="Mood Setter">
          <span>
            Mood Setter is a connected Google Home and web application created in the cmd-f all-female hackathon. It is designed to make it easier for those struggling with mental health to reach out. It allows users to set their mood via a simple command to their Google home, which then displays on the web interface. In a future feature, users will be able to share this page with loved ones and anyone who can help.
            <a class="inline-block mt-3 text-lightpink-600 hover:underline" href="https://devpost.com/software/mood-setter" target="_blank" rel="noopener">Click here to see the project on Devpost!</a>
          </span>
        </Project>
        <Project
          video-src="/demo.mp4"
          video-type="video/mp4"
          thumbnail-src="/christine.jpg"
          category="Learning and Exploration"
          title='"Bring Christine to Work" Day'
        >
          Having a passion for VR and AR, I decided to learn the basics of Amazon Sumerian. I created a simple augmented reality mobile application allowing the user to move 'Christine', one of the Sumerian assistants, around my office according to her instructions. I shared my experience and what I'd learned about Sumerian with my coworkers at a lunch and learn.
        </Project>
        <Project image-src="/ecommerce.png" category="Academic" title="ChainXY E-Commerce Portal">
          A real-world project which my team and I completed for ChainXY in a hands-on university course. We built an e-commerce portal that would allow clients to pick and choose data products that were currently only available via a subscription. This was my first taste of front end development and my first time using React. My team and I were proud to receive excellent feedback from ChainXY as well as the other companies attending the presentation.
        </Project>
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
