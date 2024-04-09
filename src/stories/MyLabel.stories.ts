import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";


const meta: Meta<Props> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    // Genera el fichero Docs en storybooks
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' }
    }
} satisfies Meta<typeof MyLabel>
// Esto infiere la información que nuestro componente tenga, las properties como lucen.

export default meta;

// Para exportar la historia definimos un type story
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic Label'
    }
}
export const AllCaps: Story = {
    args: {
        AllCaps: true,
        label: 'All Caps Label',
        size: 'normal',
        color: 'text-primary'
    }
}
export const Secondary: Story = {
    args: {
        label: 'Secondary Label',
        size: 'h1',
        color: 'text-secondary'
    }
}
export const CustomColor: Story = {
    args: {
        label: 'Custom color Label',
        size: 'h2',
        fontColor: '#1e38d3'
    }
}