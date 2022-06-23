import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../components/Text';

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const TemplateList: ComponentStory<typeof Text> = (args) => (
  <>
    <Text variant="h1" display="block" {...args}>
      Heading 1
    </Text>
    <Text variant="h2" display="block" {...args}>
      Heading 2
    </Text>
    <Text variant="h3" display="block" {...args}>
      Heading 3
    </Text>
    <Text variant="h4" display="block" {...args}>
      Heading 4
    </Text>
    <Text variant="h5" display="block" {...args}>
      Heading 5
    </Text>
    <Text variant="h6" display="block" {...args}>
      Heading 6
    </Text>
    <Text variant="body1" display="block" {...args}>
      body1
    </Text>
    <Text variant="body2" display="block" {...args}>
      body2
    </Text>
    <Text variant="caption" display="block" {...args}>
      caption
    </Text>
  </>
);

export const SansSerif = TemplateList.bind({});
SansSerif.args = {};

export const Serif = TemplateList.bind({});
Serif.args = {
  serif: true,
};
