import { fn } from '@storybook/test';
import LogosBar from './LogosBar';

export default {
  title: 'Atoms/LogosBar',
  component: LogosBar,
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
