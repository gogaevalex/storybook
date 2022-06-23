import { render } from '@testing-library/react';
import { TestProvider } from '../../test/TestProvider';
import { IconButton } from '.';
import { SuccessIcon } from '../../icons/Success';

describe('IconButton', () => {
  it('Default render', () => {
    const { container } = render(
      <TestProvider>
        <IconButton>
          <SuccessIcon />
        </IconButton>
      </TestProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
