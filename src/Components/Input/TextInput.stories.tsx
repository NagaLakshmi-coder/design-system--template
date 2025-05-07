import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Invalid email address',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Password',
    placeholder: 'Cannot type here',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    icon: <span role="img" aria-label="search">🔍</span>, // emoji as icon
  },
};
