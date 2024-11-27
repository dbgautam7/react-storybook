// import Center from '../Center/Center'
import Button from './Button'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  decorators: [withKnobs],
}

export const Primary = () => <Button variant={'primary'}>Primary</Button>
export const Secondary = () => <Button variant={'secondary'}>Secondary</Button>
export const Success = () => <Button variant={'success'}>Success</Button>
export const Danger = () => <Button variant={'danger'}>Danger</Button>

const Template = (args) => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args',
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
  ...PrimaryA.args,
  children: 'Long Primary Args',
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
  variant: 'secondary',
  children: 'Secondary Args',
}

export const KnobsButton = () => (
  <Button
    variant={'primary'}
    disabled={boolean('Disabled', false)}
    onClick={() => console.log(import.meta.env.STORYBOOK_THEME, 'env')}
  >
    {text('Label', 'Button Label')}
  </Button>
)
