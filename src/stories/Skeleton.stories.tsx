import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from '../components/Skeleton';
import { Box } from '../components/Box';

export default {
  title: 'Example/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

const TemplateCard = () => (
  <Box display="flex">
    <Skeleton width="50px" height="50px" borderRadius="100%" />
    <Box
      m="0 0 0 16px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Skeleton width="150px" height="25px" />
      <Skeleton width="150px" height="15px" m="4px 0 0 0" />
    </Box>
  </Box>
);

export const Card = TemplateCard.bind({});
