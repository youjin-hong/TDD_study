import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Button } from 'Components/Button';

describe('<Button />', () => {
  it('renders component correctly and applies styles', () => {
    const { container } = render(<Button label="Button Test" />);

    const buttonElement = screen.getByRole('button', { name: 'Button Test' });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule('background-color', '#304FFE');
    expect(buttonElement).toHaveStyleRule('background-color', '#1E40FF', {
      modifier: ':hover',
    });

    expect(container).toMatchInlineSnapshot();
  });

  it('changes backgroundColor and hoverColor Props correctly', () => {
    const backgroundColor = '#FF1744';
    const hoverColor = '#F01440';

    render(
      <Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} />,
    );

    const customButtonElement = screen.getByRole('button', { name: 'Button Test' });
    expect(customButtonElement).toHaveStyleRule('background-color', backgroundColor);
    expect(customButtonElement).toHaveStyleRule('background-color', hoverColor, {
      modifier: ':hover',
    });
  });

  it('clicks the button', () => {
    const handleClick = jest.fn();
    render(<Button label="Button Test" onClick={handleClick} />);

    const label = screen.getByText('Button Test');
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(label);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
