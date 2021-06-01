import { Column, Row, Image, Text } from '@drykiss/industry-ui'
import styled from 'styled-components'
import AC from '../adaptorComponent'

const InfoRow = ({ index, item }) => {
  return (
    <AC
      as={Row}
      flexRowReverse={index % 2 !== 0}
      mb='8rem'
      mdStyles={{ column: true, pX: '2rem', mb: '4rem' }}
    >
      <AC as={Column} md={6} >
        <Image src={item.image} alt={item.title} />
      </AC>
      <Column md={6}>
        <AC as='p' textSize='2.25rem' textColour='darkBlue' mb='0.75rem' bold>
          {item.title}
        </AC>
        {item.sub && (
          <AC as={Text} textSize='1rem' textColour='dark' mb='2rem'  bold>
            {item.sub}
          </AC>
        )}
        <AC
          as={Text}
          textSize='1rem'
          textColour='darkText'
          mb='1rem'
          lineHeight='28px'
        >
          {item.desc}
        </AC>
        {item.bullets && (
          <BulletsContainer>
            {item.bullets.map((bullet, idx) => (
              <AC
                key={'bullet' + idx}
                as='li'
                textSize='1rem'
                textColour='darkText'
                mb='0.5rem'
              >
                {bullet}
              </AC>
            ))}
          </BulletsContainer>
        )}
      </Column>
    </AC>
  )
}
const BulletsContainer = styled.ul`
  margin: 0;
`

export default InfoRow
