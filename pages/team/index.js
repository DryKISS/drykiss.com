/**
 * Team
 */

// UI
import { Card, CardBody, Icon, Image, Column, Row, Space, Text } from '@drykiss/industry-ui'

// Style
import { Page, Team } from 'components'

// Data
import { MEMBERS } from 'data'

export async function getStaticProps () {
  return {
    props: { members: MEMBERS }
  }
}

const PageTeam = ({ members }) => {
  const meta = {
    description: `DryKISS is a full service internet and mobile digital production house. Our
      services span consulting, strategy; planning; development; testing and analytics.`,
    path: '/team',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page
      heading='Meet the DryKiss Team'
      heroHeading='The Team'
      heroSubHeading='The People Behind DryKISS'
      meta={meta}
    >
      <Team members={members} />
    </Page>
  )
}

export default PageTeam
