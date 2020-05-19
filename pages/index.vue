<template>
  <div>
    <Header />
    <Projects />
    <Award />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import Projects from '~/components/Projects';
import Award from '~/components/Award';

export default {
  components: { Projects, Header, Award },
};
</script>

<style>
.my-mood {
  /*background-image: url('~assets/moodScreenshot.png');*/
  width: 700px;
}
</style>
