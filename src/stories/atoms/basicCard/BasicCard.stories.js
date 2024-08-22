import { fn } from '@storybook/test';
import BasicCard from './BasicCard';

export default {
  title: 'Atoms/BasicCard',
  component: BasicCard,
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
