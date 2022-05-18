import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../components/Text';

export default {
  title: 'Example/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>Текст</Text>
);

const TemplateList: ComponentStory<typeof Text> = () => (
  <>
    <Text size="h1" display="block">
      h1
    </Text>
    <Text size="h2" display="block">
      h2
    </Text>
    <Text size="h3" display="block">
      h3
    </Text>
    <Text size="h4" display="block">
      h4
    </Text>
    <Text size="h5" display="block">
      h5
    </Text>
    <Text size="h6" display="block">
      h6
    </Text>
    <Text size="body1" display="block">
      body1
    </Text>
    <Text size="body2" display="block">
      body2
    </Text>
    <Text size="caption" display="block">
      caption
    </Text>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const List = TemplateList.bind({});
List.args = {};
