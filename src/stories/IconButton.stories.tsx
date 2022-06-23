import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SuccessIcon } from '../icons/Success';
import { IconButton } from '../components/IconButton';
import { Box } from '../components/Box';

export default {
  title: 'Example/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <SuccessIcon />
  </IconButton>
);

export const Default = Template.bind({});

const TemplateList: ComponentStory<typeof IconButton> = (args) => (
  <Box display="flex">
    <Box m="0 10px">
      <IconButton size="s" {...args}>
        <SuccessIcon />
      </IconButton>
    </Box>
    <Box m="0 10px">
      <IconButton {...args}>
        <SuccessIcon />
      </IconButton>
    </Box>
    <Box m="0 10px">
      <IconButton size="l" {...args}>
        <SuccessIcon />
      </IconButton>
    </Box>
    <Box m="0 10px">
      <IconButton size="s" disabled={true} {...args}>
        <SuccessIcon />
      </IconButton>
    </Box>
    <Box m="0 10px">
      <IconButton disabled={true} {...args}>
        <SuccessIcon />
      </IconButton>
    </Box>
    <Box m="0 10px">
      <IconButton size="l" disabled={true} {...args}>
        <SuccessIcon />
      </IconButton>
    </Box>
  </Box>
);

export const DefaultList = TemplateList.bind({});
DefaultList.args = {};
