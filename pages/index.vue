<template>
  <div>
    <Header />
    <Projects />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Projects from '~/components/Projects';

export default {
  components: { Projects, Header },
};
</script>

<style>
.my-mood {
  /*background-image: url('~assets/moodScreenshot.png');*/
  width: 700px;
}
</style>
