import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../components/Box';
import { Select } from '../components/Select';

export default {
  title: 'Example/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Box height="180px">
    <Select {...args}>
      <li value={1}>Item</li>
      <li value={2}>Item 2</li>
      <li value={3}>Item 3</li>
    </Select>
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Error = Template.bind({});
Error.args = {
  isError: true,
  helpText: 'Error',
};

export const Disable = Template.bind({});
Disable.args = {
  isDisable: true,
  helpText: 'Disable',
};
