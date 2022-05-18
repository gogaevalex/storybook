import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from '../components/Tooltip';
import { Box } from '../components/Box';

export default {
  title: 'Example/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args}>
    <Box m="10px 0 0 100px" width="100px">
      Tooltip
    </Box>
  </Tooltip>
);

export const Primary = Template.bind({});
Primary.args = {
  content: 'Текст тултипа',
};
