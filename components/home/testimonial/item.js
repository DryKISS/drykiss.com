/**
 * Components - Home - Testimonial - Item
 */

// UI
import { Avatar, Column, Divider, Row, Text } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

export const TestimonialItem = ({ name, position, src, text }) => {
  return (
    <Row align='center'>
      <Column md={1}>
        <StyledAvatar content={name} src={src} size='xxl' />
      </Column>

      <Column md={2}>
        <Text content={name} context='primary' />
        <Text content={position} />
      </Column>

      <Divider flexItem vertical />

      <Column md={8}>{text}</Column>
    </Row>
  )
}

const StyledAvatar = styled(Avatar)`
  img {
    height: 100%;
    object-fit: cover;
  }
`
