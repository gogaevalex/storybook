import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Svg } from '../components/Svg';
import { Box } from '../components/Box';
import { ErrorIcon } from '../icons/Error';
import { WarningIcon } from '../icons/Warning';
import { SuccessIcon } from '../icons/Success';
import { InfoIcon } from '../icons/Info';
import { LoadIcon } from '../icons/Load';

export default {
  title: 'Example/Icons',
  component: Svg,
} as ComponentMeta<typeof Svg>;

const Template: ComponentStory<typeof Svg> = (args) => (
  <Box display="flex">
    <Box m="0 10px">
      <ErrorIcon {...args} />
    </Box>
    <Box m="0 10px">
      <WarningIcon {...args} />
    </Box>
    <Box m="0 10px">
      <SuccessIcon {...args} />
    </Box>
    <Box m="0 10px">
      <InfoIcon {...args} />
    </Box>
    <Box m="0 10px">
      <LoadIcon {...args} />
    </Box>
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
