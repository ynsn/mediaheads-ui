import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Icon from '@/components/Icon.vue';

const meta = {
    title: 'MediaheadsUI/Design/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        id: { control: 'text' },
        name: { control: 'text' },
        size: { control: 'select', options: ['small', 'normal', 'large'] },
        variant: { control: 'select', options: ['outlined', 'rounded', 'sharp'] },
    },
    args: {
        id: 'icon',
        name: 'home',
        size: 'normal',
        variant: 'rounded',
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: 'primary-icon',
        name: 'home',
        variant: 'rounded',
    },
};