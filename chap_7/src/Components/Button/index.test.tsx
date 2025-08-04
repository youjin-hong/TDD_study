import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from 'Components/Button';

describe('<Button />', () => {
  it('changes backgroundcolor and hovercolor Props correctly', () => {
    const backgroundcolor = '#FF1744';  // hex
    const hovercolor = '#F01440';  // hex

    render(
      <Button label="Button Test" backgroundColor={backgroundcolor} hoverColor={hovercolor} />
    );

    const customButtonElement = screen.getByRole('button', { name: 'Button Test' });

    // hex 값으로 스타일 확인
    expect(customButtonElement).toHaveStyle(`background-color: ${backgroundcolor}`);
    
    // hover 상태에서 스타일 확인
    fireEvent.mouseOver(customButtonElement);

    // getComputedStyle을 사용하여 실제 렌더링된 스타일 확인
    const computedStyle = window.getComputedStyle(customButtonElement);
    expect(computedStyle.backgroundColor).toBe('rgb(255, 23, 68)');  // 실제 렌더링된 색상 확인
  });
});
