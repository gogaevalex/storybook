import { render } from '@testing-library/react';
import { TestProvider } from '../../test/TestProvider';
import { Tag, ITagProps } from '.';

describe('Tag', () => {
  const defaultProps: ITagProps = {
    content: 'фильмы',
  };
  it('Default render', () => {
    const { container } = render(
      <TestProvider>
        <Tag {...defaultProps} />
      </TestProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
