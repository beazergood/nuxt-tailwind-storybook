import '../assets/css/tailwind.css'
// Top100.stories.js
import Logo from './Logo.vue'

export default {
  component: Logo,
  title: 'Components/Logo',
}

// 👇 We create a “template” of how args map to rendering
const Template = (_args, { argTypes }) => ({
  components: { Logo },
  props: Object.keys(argTypes),
  template: '<Logo />',
})

// 👇 Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args }

export const Tertiary = Template.bind({})
Tertiary.args = { ...Primary.args }
