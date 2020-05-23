<template>
  <div>
    <Header />
    <Projects />
    <ResumeCTA />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Projects from '~/components/Projects';
import ResumeCTA from '~/components/ResumeCTA';
import Footer from '~/components/Footer';

export default {
  components: { Projects, Header, ResumeCTA, Footer },
};
</script>
