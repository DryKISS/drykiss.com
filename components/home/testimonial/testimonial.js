/**
 * Components - Home - Testimonial
 */

// UI
import { Carousel, Container, Heading } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

import { TestimonialItem } from './item'
import { TestimonialData } from './data'

export const HomeTestimonial = () => {
  return (
    <Container>
      <StyledHeading content='Testimonials' tag='h5' />

      <Carousel
        height='130px'
        slides={TestimonialData.map(testimonial => ({
          node: <TestimonialItem key={testimonial.name} {...testimonial} />,
          text: ' '
        }))}
      />
    </Container>
  )
}

const StyledTitle = styled(Heading)`
  margin: 0 0 2rem 0;
`

const StyledHeading = styled(StyledTitle)`
  text-align: center;
`
