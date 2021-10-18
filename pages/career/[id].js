/**
 * Career
 */

// UI

import { MetaHead, Button, Column, Row } from '@drykiss/industry-ui'

import { Brand, Canonical } from '../../config/config'
import SimplePageHeader from '../../components/common/head'
import AC from '../../components/adaptorComponent'
import { MaxContainer } from '../../components/common/maxContainer'

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}
const eachCareerData = {
  title: 'Senior React Developer',
  image: '/images/career/react.svg',
  sections: [
    {
      title: 'Discription',
      descs: [
        'DryKISS is looking for a passionate, dedicated, and talented Senior React Engineer who has experience building innovative, mission critical web applications.',
        'You will have an opportunity to make a large impact on the design, UX, architecture, and development of how DryKISS operates. In this role, you will:'
      ],
      bullets: [
        'Own one of our project SDLC.',
        'Work to design features, prototype new components, and evaluate technical feasibility.',
        'Build out our CI approaches and recommend best practices to speed up development processes.',
        'Operate within a team using modern software engineering approaches and an agile framework.'
      ]
    },
    {
      title: 'Our Needs',

      bullets: [
        '5+ years front end developemnt experience.',
        '3+ years developing with React',
        'Experience with Storybook',
        'Experience with Styled Components',
        'Experience with NextJS',
        'Experience with Hasura',
        'Ability to write high-performance, reusable code for UI components.',
        'Expert in all kinds of testing best practices; writing clean and maintainable code.',
        'Experienced in CI including git, aws, docker, etc.',
        'Understanding of NodeJS backend architecture and developement.',
        'English speaking and able to communicate problems before they arise at all levels.'
      ]
    },
    {
      title: 'Benefits',
      bullets: [
        'Fully Remote',
        'Training budget is available',
        '10% time, we will work on your ideas with you, using DryKISS stack.',
        'Flexible work time, we focus on delivery.'
      ]
    },
    {
      title: 'Offer Details',
      bullets: [
        'Able to communicate in English',
        'Training budget, including language lessons are available.',
        'Contract Salary: Based on experience.'
      ]
    }
  ]
}

const EachCareerPage = () => {
  return (
    <>
      {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}
      <SimplePageHeader
        title="Careers"
        sub="Lorem ipsum dolor sit amet, consectetuer"
        image="/images/career/head.svg"
      />
      <AC
        as={MaxContainer}
        mb="6rem"
        mdStyles={{
          pX: '1.5rem'
        }}
      >
        <AC as={Row} itemsCenter>
          <Column md={9} sm={12}>
            <AC as="h1" textColour="darkBlue" textSize="2.25" bold>
              {eachCareerData.title}
            </AC>
          </Column>
          <Column md={3} sm={12} flex itemsCenter>
            {/* <Image src={eachCareerData.image} alt={eachCareerData.title} /> */}
            <AC as={Button} bgColour="primary" elevation={1}>
              Apply on Angle List
            </AC>
          </Column>
        </AC>
        {eachCareerData.sections.map((section, index) => {
          return (
            <AC key={'section' + index}>
              <AC as="h2" textSize="1.25rem" textColour="darkBlue" bold>
                {section.title}
              </AC>
              {section.descs &&
                section.descs.map((desc, idx) => {
                  return (
                    <AC
                      key={'desc' + index + '' + idx}
                      as="p"
                      mb="1rem"
                      textSize="0.75rem"
                      textColour="#999999"
                      bold
                    >
                      {desc}
                    </AC>
                  )
                })}
              <AC as="ul">
                {section.bullets.map((bullet, idx) => {
                  return (
                    <AC
                      as="li"
                      key={'bullet' + index + '' + idx}
                      mb="1rem"
                      textSize="0.75rem"
                      textColour="#999999"
                      bold
                    >
                      {bullet}
                    </AC>
                  )
                })}
              </AC>
              <AC key={'sp' + index} mb="2.5rem"></AC>
            </AC>
          )
        })}
      </AC>
    </>
  )
}

export default EachCareerPage
