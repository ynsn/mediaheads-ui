import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import Spinner from "@/components/Status/Spinner.vue";

const meta = {
    title: 'MediaheadsUI/Status/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
        id: { control: 'text' },
        primaryColor: { control: 'color' },
        secondaryColor: { control: 'color' },
        weight: { control: 'number' },
    },
    args: {
        id: 'spinner',
        primaryColor: '#0000002A',
        secondaryColor: '#FFF',
        weight: 5,
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: 'primary-spinner',
        primaryColor: '#0000002A',
        secondaryColor: '#FFF',
        weight: 5,
    },
};