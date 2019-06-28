/**
 * What We do
 */

// Config
import { BRAND, URL_BASE } from 'config'

// UI
import {
  Column,
  Container,
  Heading,
  MetaHead,
  PageHeading,
  Row
} from 'industry-ui'

const WhatWedo = () => {
  const meta = {
    canonical: URL_BASE,
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <>
      <MetaHead brand={BRAND} meta={meta} />

      <Container>

        <PageHeading heading='What we do' />

        <Row>

          <Column lg={4}>

            <Heading content='Responsive development' tag='h3' />

            <p>
              Crafting responsive, mobile first or adaptive sites and
              applications is something DryKISS excels in. Developing a mobile
              friendly product is not only a user requirement but it also
              improves SEO aspects.
            </p>

          </Column>

          <Column lg={4}>

            <Heading content='Prototyping' tag='h3' />

            <p>
              Using CodeBlender our atomic development pattern library,
              DryKISS can rapidly deliver any kind of prototype to answer user
              research questions. We have already delivered a TV EPG; mobile
              touchID application; one page sites and email newsletter.
            </p>

          </Column>

          <Column lg={4}>

            <Heading content='Hybrid mobile development' tag='h3' />

            <p>
              Utilising the latest technologies such as Cordova or PhoneGap,
              DryKISS can deliver cross-platform HTML5 and JavaScript mobile
              applications without hassle.
            </p>

          </Column>

        </Row>

      </Container>

    </>
  )
}

export default WhatWedo
