import styled, { css } from 'styled-components'

const margin = css`
  ${({ margin }) => margin && styleMapper('margin', margin)}
  ${({ mX }) => mX && styleMapper('mX', mX)}
  ${({ mY }) => mY && styleMapper('mY', mY)}
  ${({ mb }) => mb && styleMapper('mb', mb)}
  ${({ mt }) => mt && styleMapper('mt', mt)}
  ${({ ml }) => ml && styleMapper('ml', ml)}
  ${({ mr }) => mr && styleMapper('mr', mr)}
`
const padding = css`
  ${({ padding }) => padding && styleMapper('padding', padding)}
  ${({ pX }) => pX && styleMapper('pX', pX)}
  ${({ pY }) => pY && styleMapper('pY', pY)}
  ${({ pb }) => pb && styleMapper('pb', pb)}
  ${({ pt }) => pt && styleMapper('pt', pt)}
  ${({ pl }) => pl && styleMapper('pl', pl)}
  ${({ pr }) => pr && styleMapper('pr', pr)}
`
const acStyles = css`
  font-weight: 500;
  ${({ textCenter }) => textCenter && styleMapper('textCenter', textCenter)}
  ${({ textAlign }) => textAlign && styleMapper('textAlign', textAlign)}
  ${({ textLeft }) => textLeft && styleMapper('textLeft', textLeft)}
  ${({ textRight }) => textRight && styleMapper('textRight', textRight)}
  ${({ textJustify }) => textJustify && styleMapper('textJustify', textJustify)}
  ${({ bgColour, theme }) => bgColour && styleMapper('bgColour', bgColour, theme)}
  ${({ bgImage, theme }) => bgImage && styleMapper('bgImage', bgImage, theme)}
  ${({ bgSize }) => bgSize && styleMapper('bgSize', bgSize)}
  ${({ textColour, theme }) => textColour && styleMapper('textColour', textColour, theme)}
  ${({ height }) => height && styleMapper('height', height)}
  ${({ minHeight }) => minHeight && styleMapper('minHeight', minHeight)}
  ${({ maxWidth }) => maxWidth && styleMapper('maxWidth', maxWidth)}
  ${({ width }) => width && styleMapper('width', width)}
  ${({ hidden }) => hidden && styleMapper('hidden', hidden)}
  ${({ hide }) => hide && styleMapper('hide', hide)}
  ${({ noBorder }) => noBorder && styleMapper('noBorder', noBorder)}
  ${({ borderRadius }) => borderRadius && styleMapper('borderRadius', borderRadius)}
  ${({ borderColour, theme }) => borderColour && styleMapper('borderColour', borderColour, theme)}
  ${({ bbColour, theme }) => bbColour && styleMapper('bbColour', bbColour, theme)}
  ${({ borderWidth }) => borderWidth && styleMapper('borderWidth', borderWidth)}
  ${({ objectFit }) => objectFit && styleMapper('objectFit', objectFit)}
  ${({ order }) => order && styleMapper('order', order)}
  ${({ center }) => center && styleMapper('center', center)}
  ${({ spaceBetween }) => spaceBetween && styleMapper('spaceBetween', spaceBetween)}
  ${({ selfCenter }) => selfCenter && styleMapper('selfCenter', selfCenter)}
  ${({ elevation }) => elevation && styleMapper('elevation', elevation)}
  ${({ textSize }) => textSize && styleMapper('textSize', textSize)}
  ${({ fontFamily }) => fontFamily && styleMapper('fontFamily', fontFamily)}
  ${({ lineHeight }) => lineHeight && styleMapper('lineHeight', lineHeight)}
  ${({ bold }) => bold && styleMapper('bold', bold)}
  ${({ semiBold }) => semiBold && styleMapper('semiBold', semiBold)}
  ${({ light }) => light && styleMapper('light', light)}
  ${({ pointer }) => pointer && styleMapper('pointer', pointer)}
  ${({ fullWidth }) => fullWidth && styleMapper('fullWidth', fullWidth)}
  ${({ absolute }) => absolute && styleMapper('absolute', absolute)}
  ${({ relative }) => relative && styleMapper('relative', relative)}
  ${({ flex }) => flex && styleMapper('flex', flex)}
  ${({ wrap }) => wrap && styleMapper('wrap', wrap)}
  ${({ gap }) => gap && styleMapper('gap', gap)}
  ${({ column }) => column && styleMapper('column', column)}
  ${({ columnsReverse }) => columnsReverse && styleMapper('columnsReverse', columnsReverse)}
  ${({ itemsStart }) => itemsStart && styleMapper('itemsStart', itemsStart)}
  ${({ itemsCenter }) => itemsCenter && styleMapper('itemsCenter', itemsCenter)}
  ${({ justifyContent }) => justifyContent && styleMapper('justifyContent', justifyContent)}
  ${({ justifyCenter }) => justifyCenter && styleMapper('justifyCenter', justifyCenter)}
  ${({ flexRowReverse }) => flexRowReverse && styleMapper('flexRowReverse', flexRowReverse)}
  ${({ contentAround }) => contentAround && styleMapper('contentAround', contentAround)}
  ${({ flexColumn }) => flexColumn && styleMapper('flexColumn', flexColumn)}
  ${({ flexFiller }) => flexFiller && styleMapper('flexFiller', flexFiller)}
  ${({ bgCover }) => bgCover && styleMapper('bgCover', bgCover)}
    ${margin}
    ${padding}
    ${({ customCss }) => customCss && customCss}
`
const styleMapper = (key, value, theme) => {
  let v = ''
  switch (key) {
    case 'margin':
      v = `margin:${value};`
      break
    case 'mt':
      v = `margin-top:${value};`
      break
    case 'mX':
      v = `
        margin-left: ${value};
        margin-right: ${value};
        `
      break
    case 'mY':
      v = `
          margin-top: ${value};
          margin-bottom: ${value};
          `
      break
    case 'mb':
      v = `
            margin-bottom: ${value};
            `
      break
    case 'ml':
      v = `
            margin-left: ${value};
            `
      break
    case 'mr':
      v = `
      margin-right: ${value};
    `
      break

    case 'padding':
      v = `padding:${value};`
      break
    case 'pt':
      v = `padding-top:${value};`
      break
    case 'pX':
      v = `
          padding-left: ${value};
          padding-right: ${value};
          `
      break
    case 'pY':
      v = `
            padding-top: ${value};
            padding-bottom: ${value};
            `
      break
    case 'pb':
      v = `
              padding-bottom: ${value};
              `
      break
    case 'pl':
      v = `
              padding-left: ${value};
              `
      break
    case 'pr':
      v = `
        padding-right: ${value};
      `
      break
    case 'textCenter':
      v = `
      text-align: center !important;
    `
      break
    case 'textAlign':
      v = `
      text-align: ${value};
    `
      break
    case 'textRight':
      v = `
      text-align: right;
    `
      break
    case 'textJustify':
      v = `
      text-align: justify;
    `
      break
    case 'textLeft':
      v = `
      text-align: left;
    `
      break
    case 'height':
      v = `
      height: ${value};
    `
      break
    case 'minHeight':
      v = `
      min-height: ${value};
    `
      break
    case 'maxWidth':
      v = `
      max-width: ${value};
    `
      break
    case 'width':
      v = `
      width: ${value};
    `
      break
    case 'center':
      v = `
      display: flex;
      align-items: center;
      justify-content: center;
    `
      break
    case 'selfCenter':
      v = `
			align-self: center;

    `
      break
    case 'justifyCenter':
      v = `
			justify-content: center;

    `
      break
    case 'bold':
      v = `
      font-weight: 700;
    `
      break
    case 'elevation':
      v = `
      box-shadow: 0px ${10 * value}px ${25 * value}px rgba(0, 0, 0, ${0.1 * value});
    `
      break
    case 'textSize':
      v = `
      font-size: ${value};
      line-height: calc(${value} + (${value} / 5));
    `
      break
    case 'lineHeight':
      v = `
      line-height: ${value};
    `
      break
    case 'semiBold':
      v = `
      font-weight: 600;
    `
      break
    case 'pointer':
      v = `
      cursor: pointer;
    `
      break
    case 'fullWidth':
      v = `
      width: 100%;
    `
      break
    case 'absolute':
      v = `
      position: absolute;
    `
      break
    case 'relative':
      v = `
      position: relative;
    `
      break
    case 'flex':
      v = `
      display: flex;
    `
      break
    case 'column':
      v = `
      display: flex;
      flex-direction:column;
    `
      break
    case 'columnsReverse':
      v = `
      display: flex;
      flex-direction:column-reverse;
    `
      break
    case 'itemsStart':
      v = `
      align-items: start;
    `
      break
    case 'itemsCenter':
      v = `
      align-items: center;
    `
      break
    case 'flexRowReverse':
      v = `
      flex-direction: row-reverse;
    `
      break
    case 'contentAround':
      v = `
      justify-content: space-around;
    `
      break
    case 'flexColumn':
      v = `
      display: flex;
      flex-direction: column;
    `
      break
    case 'flexFiller':
      v = `
      flex: 1;
    `
      break
    case 'order':
      v = `
      order: ${value};
    `
      break
    case 'wrap':
      v = `
      display:flex;
			flex-wrap:wrap;
    `
      break
    case 'gap':
      v = `
      gap:${value};
    `
      break
    case 'bgColour':
      if (theme) {
        v = `
      background-color: ${theme?.COLOUR[value] ?? value};
    `
      }
      break
    case 'textColour':
      if (theme) {
        v = `
      color: ${theme?.COLOUR[value] ?? value};
    `
      }
      break
    case 'bgImage':
      v = `
      background-image: url(${value});
    `
      break
    case 'bgSize':
      v = `
      background-size: ${value};
    `
      break
    case 'bgCover':
      v = `
      background-size: cover;
    `
      break
    case 'borderColour':
      v = `
      border: 1px solid ${theme?.COLOUR[value] ?? value};
    `
      break
    case 'bbColour':
      v = `
      border-bottom: 1px solid ${theme?.COLOUR[value] ?? value};
    `
      break
    case 'borderWidth':
      v = `
      border-width:${value};
    `
      break
    case 'borderRadius':
      v = `
      border-radius: ${value};
    `
      break
    case 'spaceBetween':
      v = `
      justify-content: space-between;
    `
      break
    case 'light':
      v = `
      font-weight: 400 !important;
    `
      break
    case 'fontFamily':
      v = `
      font-family: ${value},sans-serif;
    `
      break
    case 'justifyContent':
      v = `
      justify-content: ${value};
    `
      break
    case 'noBorder':
      v = `
      border: none !important;
    `
      break
    case 'objectFit':
      v = `
      object-fit: ${value};
    `
      break
    case 'hidden':
    case 'hide':
      v = `
      display: none;
    `
      break

    default:
      break
  }

  return v
}
const creator = (type, theme) => {
  let c = ''
  if (type) {
    for (const key in type) {
      c += styleMapper(key, type[key], theme)
    }
  }
  return css`
    ${c}
  `
}

export const largerThanTablet = `@media screen and (min-width: 768px)`
export const tabletAndSmaller = `@media screen and (max-width: 768px)`
export const largerThanMobile = `@media screen and (min-width: 576px)`
export const mobileAndSmaller = `@media screen and (max-width: 576px)`

export const AdaptorComponent = styled.div`
  ${acStyles}
  ${tabletAndSmaller} {
    ${({ mdStyles, theme }) => creator(mdStyles, theme)}
  }
  ${mobileAndSmaller} {
    ${({ smStyles, theme }) => creator(smStyles, theme)}
  }
`

export default AdaptorComponent
