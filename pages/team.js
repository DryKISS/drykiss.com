/**
 * Team
 */

// UI
import { Page } from '../components/common/page/page'
import { Team } from '../components/team/team'
import { MEMBERS } from '../data/members'

const meta = {
  description: `The people that work at DryKISS Ltd`,
  path: '/team',
  title: 'DryKISS Ltd Team'
}

const PageTeam = ({ members }) => {
  return (
    <Page
      heading="Meet the DryKiss Team"
      heroHeading="The Team"
      heroSubHeading="The People Behind DryKISS"
      meta={meta}
    >
      <Team members={members} />
    </Page>
  )
}

export async function getStaticProps() {
  return {
    props: { members: MEMBERS }
  }
}

export default PageTeam
