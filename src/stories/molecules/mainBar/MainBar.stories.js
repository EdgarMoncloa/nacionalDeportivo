import { fn } from '@storybook/test';
import MainBar from './MainBar';

export default {
  title: 'Molecules/MainBar',
  component: MainBar,
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
