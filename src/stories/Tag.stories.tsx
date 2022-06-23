import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from '../components/Tag';

export default {
  title: 'Example/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

// const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
const Template: ComponentStory<typeof Tag> = (args) => {
  const [activated, setActivated] = useState(false);
  return (
    <Tag
      activated={activated}
      {...args}
      onClick={() => setActivated(!activated)}
    />
  );
};
export const Primary = Template.bind({});
Primary.args = {
  content: 'Tag',
};
