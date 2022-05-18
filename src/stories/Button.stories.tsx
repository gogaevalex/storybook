import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SuccessIcon } from '../icons/Success';

import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: 'Click here',
};

export const Secondary = Template.bind({});
Secondary.args = {
  content: 'Click here',
};

export const Icon = Template.bind({});
Icon.args = {
  content: 'Click here',
  afterContent: <SuccessIcon />,
};
