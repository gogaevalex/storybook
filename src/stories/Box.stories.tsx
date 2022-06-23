import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from '../components/Box';

export default {
  title: 'Example/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => {
  return (
    <Box {...args} className="asd">
      Content
    </Box>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
