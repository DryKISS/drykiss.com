import styled, { css } from 'styled-components'
const margin = css`
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
  ${({ mX }) =>
    mX &&
    css`
      margin-left: ${mX};
      margin-right: ${mX};
    `}
  ${({ mY }) =>
    mY &&
    css`
      margin-top: ${mY};
      margin-bottom: ${mY};
    `}
  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
  ${({ mt }) =>
    mt &&
    css`
      margin-top: ${mt};
    `}
  ${({ ml }) =>
    ml &&
    css`
      margin-left: ${ml};
    `}
  ${({ mr }) =>
    mr &&
    css`
      margin-right: ${mr};
    `}
`
const padding = css`
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  ${({ pX }) =>
    pX &&
    css`
      padding-left: ${pX};
      padding-right: ${pX};
    `}
  ${({ pY }) =>
    pY &&
    css`
      padding-top: ${pY};
      padding-bottom: ${pY};
    `}
  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: ${pb};
    `}
  ${({ pt }) =>
    pt &&
    css`
      padding-top: ${pt};
    `}
  ${({ pl }) =>
    pl &&
    css`
      padding-left: ${pl};
    `}
  ${({ pr }) =>
    pr &&
    css`
      padding-right: ${pr};
    `}
`

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
      background-color: ${theme.COLOUR[bgColour] ?? bgColour};
    `}
  ${({ textColour, theme }) =>
    textColour &&
    css`
      color: ${theme.COLOUR[textColour] ?? textColour};
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
      box-shadow: 0px ${10 * elevation}px ${25 * elevation}px rgba(0, 0, 0, ${0.1 * elevation});
    `}
    ${({ textSize }) =>
    textSize &&
    css`
      font-size: ${textSize};
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
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `}
  ${({ itemsStart }) =>
    itemsStart &&
    css`
      align-items: start;
    `}
  ${({ itemsCenter }) =>
    itemsCenter &&
    css`
      align-items: center;
    `}
  ${({ flexRowReverse }) =>
    flexRowReverse &&
    css`
      flex-direction: row-reverse;
    `}
  ${({ flexColumn }) =>
    flexColumn &&
    css`
      display: flex;
      flex-direction: column;
    `}
  ${({ flexFiller }) =>
    flexFiller &&
    css`
      flex: 1;
    `}
    ${margin}
    ${padding}
`
export default AdaptorComponent
