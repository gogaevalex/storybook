import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from '../components/Avatar';
import { Box } from '../components/Box';

export default {
  title: 'Example/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const TemplateList: ComponentStory<typeof Avatar> = (args) => (
  <>
    <Box p="0px 0px 20px 20px">
      <Avatar size="s" {...args} />
    </Box>
    <Box p="0px 0px 20px 20px">
      <Avatar {...args} />
    </Box>
    <Box p="0px 0px 20px 20px">
      <Avatar size="l" {...args} />
    </Box>
    <Box p="0px 0px 20px 20px">
      <Avatar size="xl" {...args} />
    </Box>
    <Box p="0px 0px 20px 20px">
      <Avatar size="xxl" {...args} />
    </Box>
  </>
);

export const NoPhoto = TemplateList.bind({});
NoPhoto.args = {};

export const Photo = TemplateList.bind({});
Photo.args = {
  urlImage: './test-avatar.jpg',
};
