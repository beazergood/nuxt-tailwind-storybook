<template>
  <div
    class="p-4 mb-20 bg-gradient-to-tl items-start from-green-800 to-green-500 text-white"
  >
    <ul class="px-0" v-if="type == 'top100'">
      <li
        v-for="course in allCourses"
        :key="course._id"
        class="border list-none rounded-sm px-3 py-3 border-2 flex-col"
        style="border-bottom-width: 0"
      >
        <div class="flex">
          <span>{{ course.name }}</span>
          <span class="flex-auto"></span>
          <span class="text-left"> {{ course.rank }}</span>
        </div>
        <!-- <div>
          <p>{{ course.description }}</p>
        </div> -->
      </li>
    </ul>
    <ul class="px-0" v-else-if="type == 'near'">
      <li
        v-for="course in allCourses"
        :key="course._id + '-' + course.url_slug"
        class="border list-none rounded-sm px-3 py-3 border-2 flex-col"
      >
        <div class="flex-col">
          <div class="flex-row">
            <span>{{ course.name }}</span>
            <span class="flex-auto"></span>
            <span class="text-left"> {{ course.rank }}</span>
          </div>
          <div>
            <p>{{ course.city }}, {{ course.state }}</p>
            <nuxt-link
              :to="{
                path: '/courses/' + course.url_slug,
                params: course.url_slug,
              }"
              >Detail</nuxt-link
            >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    listType: {
      type: String,
      default: 'top100',
    },
  },
  computed: {
    allCourses() {
      return this.items
    },
    type() {
      return this.listType
    },
  },
}
</script>
<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>
