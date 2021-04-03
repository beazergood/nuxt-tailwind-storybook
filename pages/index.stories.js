import '../assets/css/tailwind.css'
// Top100.stories.js
import Index from './index.vue'

export default {
  component: Index,
  title: 'Pages/Index',
}

// 👇 We create a “template” of how args map to rendering
const Template = (_args, { argTypes }) => ({
  components: { Index },
  props: Object.keys(argTypes),
  template: '<Index />',
})

// 👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args }

export const Tertiary = Template.bind({})
Tertiary.args = { ...Primary.args }
