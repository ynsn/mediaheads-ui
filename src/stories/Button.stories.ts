import {fn} from '@storybook/test';
import type {Meta, StoryObj} from '@storybook/vue3';

import "material-symbols"
import "@/common/styles/styles.scss"
import Button from '@/components/Actions/Button.vue';
import Icon from '@/components/Icon.vue';
import Tooltip from "@/components/Feedback/Tooltip.vue";

const meta = {
    title: 'MediaheadsUI/Actions/Button',
    component: Button,
    tags: ['autodocs'],

    argTypes: {
        id: {control: 'text'},
        name: {control: 'text'},
        label: {control: 'text'},
        icon: {control: 'text'},
        autofocus: {control: 'boolean'},
        disabled: {control: 'boolean'},
        pending: {control: 'boolean'},
        rounded: {control: 'boolean'},
        variant: {control: 'select', options: ['primary', 'secondary','tertiary', 'invisible']},
        size: {control: 'select', options: ['small', 'normal', 'large']},
        type: {control: 'select', options: ['button', 'submit', 'reset']}
    },
    args: {
        id: 'button',
        name: 'button',
        label: 'Button',
        icon: '',
        autofocus: true,
        disabled: false,
        pending: false,
        rounded: false,
        variant: 'primary',
        size: 'normal',
        type: 'button',
        onClick: fn()
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: 'primary-button',
        name: 'primary-button',
        label: 'Primary Button',
        icon: '',
        autofocus: false,
        disabled: false,
        pending: false,
        rounded: false,
        variant: 'primary',
        size: 'normal',
        type: 'button'
    },
    render: (args) => ({
        components: {Button, Icon, Tooltip},
        template: `
          <Tooltip content="This is a primary button">
            <Button v-bind="args"/>
          </Tooltip>
        `,
        setup() {
            return {args};
        }
    })
};

