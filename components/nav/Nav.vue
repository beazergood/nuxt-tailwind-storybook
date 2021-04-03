<template>
  <div>
    <nav class="uk-navbar-container m-5" uk-navbar>
      <div class="uk-navbar-left flex flex-row">
        <ul class="uk-navbar-nav flex flex-row">
          <li>
            <a href="#modal-full" uk-toggle
              ><span uk-icon="icon: table"></span
            ></a>
          </li>
          <li>
            <a href="/" class="mr-10">Local Golf </a>
          </li>
        </ul>

        <ul class="flex flex-row">
          <li>
            <a href="/top-100" class="mr-10">Top 100 🇺🇸</a>
          </li>
          <li>
            <a href="/list-only" class="mr-10">Searchable List </a>
          </li>
          <!-- <li>
            <a href="/google-maps" class="mr-10">Google Maps</a>
          </li>
          <li>
            <a href="/mapbox" class="mr-10">Mapbox</a>
          </li> -->
          <!-- <li>
            <a href="/kitchen-sink">Kitchen Sink</a>
          </li> -->
        </ul>
        <p>V: {{ version }}</p>
      </div>
    </nav>
    <!-- <div>
      <ul>
        <li v-for="course in courses" :key="course._id">
          <nuxt-link
            :to="{ name: 'courses-slug', params: { slug: course._id } }"
            >{{ course.name }}</nuxt-link
          >
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import version from '../../package.json'
// import coursesQuery from '~/apollo/course/courses'
export default {
  data() {
    return {
      courses: [],
      version: version.version,
    }
  },
  // apollo: {
  //   courses: {
  //     prefetch: true,
  //     query: coursesQuery,
  //   },
  // },
}
</script>

<style lang="scss" scoped></style>
