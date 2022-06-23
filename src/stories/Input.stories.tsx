import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components/Input';
import { Box } from '../components/Box';
import { SuccessIcon } from '../icons/Success';

export default {
  title: 'Example/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');
  const handleChange = (name: string, text: string) => {
    console.log(name);
    setValue(text);
  };
  return (
    <Input
      {...args}
      value={value}
      onChange={(name, text) => handleChange(name, text)}
    />
  );
};

export const Outline = Template.bind({});
Outline.args = {
  description: 'Name',
  placeholder: 'Name',
};

export const OutlineError = Template.bind({});
OutlineError.args = {
  description: 'Name',
  placeholder: 'Name',
  errored: true,
};

export const OutlineDisable = Template.bind({});
OutlineDisable.args = {
  description: 'Name',
  placeholder: 'Name',
  disabled: true,
};

export const OutlineIcon = Template.bind({});
OutlineIcon.args = {
  description: 'Name',
  placeholder: 'Name',
  beforeContent: (
    <Box width="16px" height="16px">
      <SuccessIcon />
    </Box>
  ),
};

export const Line = Template.bind({});
Line.args = {
  variant: 'line',
  description: 'Name',
  placeholder: 'Name',
};

export const LineError = Template.bind({});
LineError.args = {
  variant: 'line',
  description: 'Name',
  placeholder: 'Name',
  errored: true,
};

export const LineDisable = Template.bind({});
LineDisable.args = {
  variant: 'line',
  description: 'Name',
  placeholder: 'Name',
  disabled: true,
};

export const LineIcon = Template.bind({});
LineIcon.args = {
  variant: 'line',
  description: 'Name',
  placeholder: 'Name',
  afterContent: (
    <Box width="16px" height="16px">
      <SuccessIcon />
    </Box>
  ),
};
