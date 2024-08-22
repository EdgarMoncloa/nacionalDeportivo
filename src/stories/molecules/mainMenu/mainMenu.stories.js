import { fn } from '@storybook/test';
import MainMenu from './MainMenu';

export default {
  title: 'Molecules/MainMenu',
  component: MainMenu,
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
