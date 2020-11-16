/**
 * Components - Home - Testimonial
 */

// UI
import { Button, Carousel, Container, Heading } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

// Components
import { SectionHeading } from 'components'
import { TestimonialItem } from './item'
import { testimonialData } from './data'

export const HomeTestimonial = () => {
  return (
    <Container>
      <SectionHeading content='Testimonials' />

      <Carousel
        fullWidth
        leftNavComponent={<StyledNav startIcon='chevron-left' size='sm' />}
        rightNavComponent={<StyledNav startIcon='chevron-right' size='sm' />}
        height='75px'
        slides={testimonialData.map(testimonial => ({
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

const StyledNav = styled(Button)`
  border-radius: 100%;
  width: 38px;
  height: 38px;
  background-color: ${({ theme }) => theme.COLOUR.light};

  svg {
    color: ${({ theme }) => theme.COLOUR.dark};
  }
`
