import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from '../components/Alert';

export default {
  title: 'Example/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}>Content</Alert>
);

export const Primary = Template.bind({});
Primary.args = {};
