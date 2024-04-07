import type { Meta, StoryObj } from '@storybook/vue3'

// import MyNuxtWelcome from './MyWelcome.vue'
import PictureFrame from '~/components/PictureFrame.vue'
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'PictureFrame',
  component: PictureFrame,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof PictureFrame>

export default meta
type Story = StoryObj<typeof meta>

export const PictureFrameStory: Story = {
  args: {},
}
