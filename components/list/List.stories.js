import '@/assets/css/tailwind.css'
// List.stories.js
import List from './List.vue'

export default {
  component: List,
  title: 'Components/List',
}

// 👇 We create a “template” of how args map to rendering
const Template = (_args, { argTypes }) => ({
  components: { List },
  props: Object.keys(argTypes),
  template: '<List :items="items" :list-type="listType" />',
})

// 👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {
  items: [
    {
      _id: 1,
      name: 'Name',
      rank: 1,
      city: 'Atlanta',
      state: 'GA',
      url_slug: 'name-of-course',
    },
  ],
  listType: 'near',
}

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args, items: ['😄👍😍💯'] }

export const Tertiary = Template.bind({})
Tertiary.args = { ...Primary.args, items: ['📚📕📈🤓'] }
