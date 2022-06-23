import { render } from '@testing-library/react';
import { TestProvider } from '../../test/TestProvider';
import { Input, InputProps } from '.';

describe('Input', () => {
  const defaultProps: InputProps = {
    value: '',
    onChange: () => {},
  };
  it('Default render', () => {
    const { container } = render(
      <TestProvider>
        <Input {...defaultProps} />
      </TestProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
