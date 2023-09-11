import type { Meta, StoryObj } from '@storybook/react';
import { Linklist } from './';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Linklist',
  component: Linklist,
  args: { chidlren: 'About' },
} satisfies Meta<typeof Linklist>;

export default meta;

export const Default: Story = {};
