import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  /* 색상 */
  ${({ theme, color }) => {
    const selected = theme.palette[color];

    return css`
      background: #228be6;
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }

      ${({ outline }) =>
        outline && (
          css`
            color: ${selected};
            background: none;
            border: 1px solid ${selected};
            &:hover {
              background: ${selected};
              color: #fff;
            }
          `
        )
      }
    `
  }}
`

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem'
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem'
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem'
  }
}

const sizeStyles = css`
  ${({ size }) => css`
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
    `
  }
`

const fullWidthStyles = css`
  ${({ fullWidth }) => 
    fullWidth && (
      css`
        justify-content: center;
        width: 100%;

        &:not(:first-child) {
          margin-left: 0;
          margin-top: 1rem;
        }
      `
    )
  }
`

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 색상 */
  ${colorStyles}

  /* 크기 */
  ${sizeStyles}

  /* 기타 */
  &:not(:first-child) {
    margin-left: 1rem;
  }

  /* 넓이 */
  ${fullWidthStyles}
`;


const Button = ({ size, color, fullWidth, outline, children, ...rest }) => {
  return (
    <StyledButton
      size={size}
      color={color}
      fullWidth={fullWidth}
      outline={outline}
      {...rest} 
    >
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
}

export default Button;
