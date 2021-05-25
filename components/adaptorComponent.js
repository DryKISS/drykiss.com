import styled, { css } from 'styled-components'

export const AdaptorComponent = styled.div`
  font-weight: 500;
  ${({ textCenter }) =>
    textCenter &&
    css`
      text-align: center;
    `}
  ${({ bgColour, theme }) =>
    bgColour &&
    css`
      background-color: ${theme.COLOUR[bgColour]};
    `}
  ${({ textColour, theme }) =>
    textColour &&
    css`
      color: ${theme.COLOUR[textColour]};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
    ${({ center }) =>
    center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
    ${({ elevation }) =>
    elevation &&
    css`
      box-shadow: 0px ${9 * elevation}px ${17 * elevation}px rgba(0, 0, 0, 0.16);
    `}
    ${({ size }) =>
    size &&
    css`
      font-size: ${size};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}
  ${({ semiBold }) =>
    semiBold &&
    css`
      font-weight: 600;
    `}
  ${({ pointer }) =>
    pointer &&
    css`
      cursor: pointer;
    `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ absolute }) =>
    absolute &&
    css`
      position: absolute;
    `}
`
export default AdaptorComponent
