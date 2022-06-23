import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from '../components/Switch';

export default {
  title: 'Example/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [value, setValue] = useState('on');
  return <Switch value={value} {...args} onChange={(arg) => setValue(arg)} />;
};

export const Active = Template.bind({});
Active.args = {
  items: [
    { value: 'on', label: 'On' },
    { value: 'off', label: 'Off' },
  ],
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: [
    { value: 'on', label: 'On' },
    { value: 'maybe', label: 'May be' },
    { value: 'off', label: 'Off' },
  ],
  disabled: true,
};
