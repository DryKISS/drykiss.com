/**
 * Menu - Create
 */

// Layout
import { Page } from 'layout/page'

// UI
import {
  Column,
  Container,
  Blockquote,
  Heading,
  Row
} from 'industry-ui'

// Style
import styled from 'styled-components'

export default () => {
  const meta = {
    description: `
      Create a simple menu that meets customer needs. Translation, legal and
      proofreading available.
    `,
    path: '/menu',
    title: `Create The Perfect Simple Menu`
  }

  return (
    <Page meta={meta}>

      <Container>

        <Blockquote
          footer='Understand | Architect | Craft'
          text='Ethos'
        />

        <Row>

          <Column lg={3}>
            <p>
              Every time we go out for a meal there is one thing we cannot
              avoid; the menu. However we find, that more often than not these
              are poorly designed, hard to read and inconsistent.
            </p>
          </Column>

          <Column lg={3}>
            <p>
              <strong>UNDERSTAND:</strong> We simplify the increasing need to
              comply with legal requirements, alergens and other food standards
              that can be over bearing for the small business.
            </p>
            <p>
              Menus also offer an amazing opportunity to relay information such
              as events, productisation, loyalty programs and social links.
            </p>
          </Column>

          <Column lg={3}>
            <p>
              <strong>ARCHITECT:</strong> We have created an online system to
              modernise the creation of a consistent menues.
            </p>
            <p>
              You could benefit from our team of proof readers, translators and
              food experts, to make sure your menu complies but firstly provides
              a great experience for your customers.
            </p>
          </Column>

          <Column lg={3}>
            <p>
              <strong>CRAFT:</strong> Simply add your menu items into our
              online portal, click important icons for allergens, vegetarian
              or vegan etc.
            </p>
            <p>
              Preview the menu. Verify and then have us print and deliver with
              our bespoke wooden clipboards.
            </p>
          </Column>

        </Row>

        <Blockquote
          footer='Menus that stand out for being simply easy to read.'
          text='Our Services'
        />

        <Row>

          <Column lg={3}>
            <Heading content='Translation' tag='h3' />
            <p>
              We can offer to translate each item in additional languages, great
              if you have an establishement in a tourist area.
            </p>
          </Column>

          <Column lg={3}>
            <Heading content='Loyalty' tag='h3' />
            <p>
              We can create loyalty offerings on the menu, let the customer take
              it away for a souvenir and stamp it to get a return customer.
            </p>
          </Column>

          <Column lg={3}>
            <Heading content='Legal' tag='h3' />
            <p>
              Stay ahead of the food standards requirements with proper food
              descriptions and labelling.
            </p>
          </Column>

          <Column lg={3}>

            <Heading content='Social' tag='h3' />
            <p>
              We will create a one page web profile of your menu. Easily entered
              by a link and QR code on the menu. From here users can rate, share
              and like items. On each menu change we will send social posts on
              your behalf.
            </p>
          </Column>

        </Row>

      </Container>

    </Page>
  )
}
