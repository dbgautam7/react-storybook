/** @type { import('@storybook/react').Preview } */

import Center from '../src/components/Center/Center'
import '@storybook/addon-console'

const preview = {
  decorators: [(story) => <Center> {story()}</Center>], //this is global decorators
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
}

export default preview
