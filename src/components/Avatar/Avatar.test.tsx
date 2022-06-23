import { render } from '@testing-library/react';
import { TestProvider } from '../../test/TestProvider';
import { Avatar, IAvatarProps } from '.';

describe('Avatar', () => {
  const defaultProps: IAvatarProps = {};
  it('Default render', () => {
    const { container } = render(
      <TestProvider>
        <Avatar {...defaultProps} />
      </TestProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
