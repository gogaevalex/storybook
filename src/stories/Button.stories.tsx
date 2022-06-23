import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SuccessIcon } from '../icons/Success';
import { Button } from '../components/Button';
import { Box } from '../components/Box';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  content: 'Click here',
};

const TemplateList: ComponentStory<typeof Button> = (args) => (
  <Box display="flex">
    <Box m="0 10px">
      <Button {...args} />
    </Box>
    <Box m="0 10px">
      <Button afterContent={<SuccessIcon />} {...args} />
    </Box>
    <Box m="0 10px">
      <Button disabled={true} afterContent={<SuccessIcon />} {...args} />
    </Box>
  </Box>
);

export const ContainedList = TemplateList.bind({});
ContainedList.args = {
  content: 'Click here',
};

export const OutlinedList = TemplateList.bind({});
OutlinedList.args = {
  content: 'Click here',
  variant: 'outlined',
};
