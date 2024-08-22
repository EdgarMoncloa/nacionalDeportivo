import { fn } from '@storybook/test';
import PrimaryLink from './PrimaryLink';

export default {
  title: 'Atoms/PrimaryLink',
  component: PrimaryLink,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};
