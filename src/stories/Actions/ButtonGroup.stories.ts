import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonGroup from "@/components/Actions/ButtonGroup.vue";
import Button from "@/components/Actions/Button.vue";

const meta = {
    title: 'MediaheadsUI/Actions/ButtonGroup',
    component: ButtonGroup,
    tags: ['autodocs'],
    argTypes: {
        id: { control: 'text' },
        orientation: { control: 'select', options: ['horizontal', 'vertical'] },
        spacing: { control: 'number' }
    },
    args: {
        id: 'button-group',
        orientation: 'horizontal',
        spacing: 8
    },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: 'primary-button-group',
        orientation: 'horizontal',
        spacing: 8
    },
    render: (args) => ({
        components: { ButtonGroup, Button },
        template: `
          <ButtonGroup v-bind="args">

          <Button label="Button 1" variant="tertiary"></Button>
          <Button label="Button 1"></Button>

          </ButtonGroup>
        `,
        setup() {
            return { args };
        }
    })
};