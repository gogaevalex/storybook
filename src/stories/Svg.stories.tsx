import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Svg } from '../components/Svg';

export default {
  title: 'Example/Svg',
  component: Svg,
} as ComponentMeta<typeof Svg>;

const Template: ComponentStory<typeof Svg> = (args) => (
  <Svg {...args}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </Svg>
);

export const Default = Template.bind({});
Default.args = {};
