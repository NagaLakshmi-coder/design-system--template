import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is a paragraph.',
  },
};
