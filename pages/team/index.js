/**
* Team
*/

// UI
import { Card, CardBody, Image, Column, Page, Row } from 'industry-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function teamMembers () {
  return [
    {
      id: 'iwarner',
      name: 'Ian Warner',
      link: 'https://www.linkedin.com/in/iwarner/',
      image: '/static/freelancer/ian-warner/1.jpg'
    },
    {
      id: 'kheruc',
      name: 'Kristian Heruc',
      link: 'https://github.com/kheruc',
      image: '/static/freelancer/kristian-heruc/1.png'
    },
    {
      id: 'octohedron',
      name: 'Gustavo Rodríguez',
      link: 'https://www.linkedin.com/in/gustavo-rodr%C3%ADguez-aa88096b/',
      image: '/static/freelancer/gustavo-rodriguez/1.jpeg'
    },
    {
      id: 'izemqi',
      name: 'Mi Zemkina',
      link: 'https://www.linkedin.com/in/zemqi/',
      image: '/static/freelancer/mi-zemkina/1.png'
    },
    {
      id: 'majid',
      name: 'Majid Amiri',
      link: 'https://www.linkedin.com/in/majidamiriii/',
      image: '/static/freelancer/majid-amiri/1.jpeg'
    },
    {
      id: 'xxinyiwho',
      name: 'Xinyi Wu',
      link: 'https://www.linkedin.com/in/xinyi-wu-78722a92/',
      image: '/static/freelancer/xinyi-wu/1.jpeg'
    },
    {
      id: 'may',
      name: 'May Tran',
      link: 'https://www.linkedin.com/in/maytran007/',
      image: '/static/freelancer/may-tran/1.jpeg'
    }

  ]
}

export default () => {
  const meta = {
    description: `
    DryKISS is a full service internet and mobile digital production house.
    Our services span consulting, strategy; planning; development; testing
    and analytics.
    `,
    path: '/team',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page pageHeading={{ heading: 'Meet the DryKISS squad!' }} meta={meta}>
      <p>At DryKISS, we offer full service web development and marketing solutions to meet all your business, startup and minimum viable product needs.
We are prepared to listen to your every desire so we can perfectly craft your projects, bring to life your ideas and boost your revenue.
      </p>
      <p>Our team comprises of highly skilled professionals with over 20+ years of experiences in web development, digital marketing, SEO and tech consulting.
We are bold, global, agile, lean and love thinking outside the box.
      </p>

      <Row>
        {teamMembers().map(member => (
          <Column lg={3}>
            <Card
              center
              bordered
              to={{ href: member.link }}
            >
              <Image alt='' src={member.image} />
              <CardBody>
                {member.name}
                <FontAwesomeIcon
                  icon={faLinkedin}
                  color="#75CCCE"
                  size="lg"
                  pull="right"
                />
              </CardBody>
            </Card>
          </Column>
        ))}
      </Row>
    </Page>
  )
}
