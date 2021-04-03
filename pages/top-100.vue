<template>
  <div class="container">
    <Nav></Nav>
    <p class="text-green-100">
      Top 100 Courses in USA as per
      <a href="https://www.top100golfcourses.com">top100</a> website.
    </p>
    <List :items="topHundreds" :list-type="'top100'" class="flex"></List>
  </div>
</template>

<script>
// import topHundredsQuery from '@/apollo/queries/course/top-hundred'
import List from '@/components/list/List'

export default {
  name: 'Top100',
  components: {
    List,
  },
  data() {
    return {
      topHundreds: [],
    }
  },
  // apollo: {
  //   topHundreds: {
  //     prefetch: true,
  //     query: topHundredsQuery,
  // variables() {
  //   return { id: parseInt(this.$route.params.id) }
  // },
  //   },
  // },
}
</script>
<style>
/* Sample `apply` at-rules with Tailwind CSS */
.container {
  /*@apply min-h-screen justify-center items-center text-center mx-auto; */
  @apply bg-gradient-to-tl items-start from-green-800 to-green-500 text-white font-mono flex flex-col min-h-screen;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
}
</style>
