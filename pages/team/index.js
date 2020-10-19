/**
 * Team
 */

// UI
import { Card, CardBody, Icon, Image, Column, Page, Row, Space, Text } from '@drykiss/industry-ui'

// Style
import styled from 'styled-components'

const PageTeam = () => {
  const teamMembers = [
    {
      id: 'iwarner',
      name: 'Ian Warner',
      link: 'https://www.linkedin.com/in/iwarner'
    },
    {
      id: 'kheruc',
      name: 'Kristian Heruc',
      link: 'https://github.com/kheruc',
      icon: 'github'
    },
    {
      id: 'xxinyiwho',
      name: 'Xinyi Wu',
      link: 'https://www.linkedin.com/in/xinyi-wu-78722a92/'
    },
    {
      id: 'may',
      name: 'May Tran',
      link: 'https://www.linkedin.com/in/maytran007/'
    }
  ]

  const meta = {
    description: `DryKISS is a full service internet and mobile digital production house. Our
      services span consulting, strategy; planning; development; testing and analytics.`,
    path: '/team',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page pageHeading={{ heading: 'Meet the DryKISS squad!' }} meta={meta}>
      <Text>
        At DryKISS, we offer full service web development and marketing solutions to meet all your
        business, startup and minimum viable product needs. We are prepared to listen to your every
        desire so we can perfectly craft your projects, bring to life your ideas and boost your
        revenue.
      </Text>

      <Space />

      <Text>
        Our team comprises of highly skilled professionals with over 20+ years of experiences in web
        development, digital marketing, SEO and tech consulting. We are bold, global, agile, lean
        and love thinking outside the box.
      </Text>

      <Space />

      <Row>
        {teamMembers.map(member => (
          <Column key={member.id} lg={3}>
            <Card center bordered to={member.link}>
              <StyledImage alt={member.name} src={`/static/team/${member.id}.jpg`} />

              <CardBody>
                {member.name}

                <Icon
                  context='primary'
                  icon={member.icon || 'linkedin'}
                  prefix='fab'
                  size='lg'
                  pull='right'
                />
              </CardBody>
            </Card>
          </Column>
        ))}
      </Row>
    </Page>
  )
}

const StyledImage = styled(Image)`
  filter: grayscale(100%);
`

export default PageTeam
