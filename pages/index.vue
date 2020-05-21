<template>
  <div>
    <Header />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header';
import Projects from '~/components/Projects';
import Footer from '~/components/Footer';

export default {
  components: { Projects, Header, Footer },
};
</script>

<style>
</style>
