import { MetaHead, Row, Column, Image } from '@drykiss/industry-ui'
import { Brand, Canonical } from '../../config/config'
import SimplePageHeader from '../../components/common/head'
import { MaxContainer } from '../../components/common/maxContainer'
import AC from '../../components/adaptorComponent'
import { css } from 'styled-components'

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}
const initialData = {
  introImage: '/images/eachWork/cleverly/introImage.svg',
  introIcon: '/images/eachWork/cleverly/projectIcon.svg',
  name: 'Cleverly',
  shortDesc:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad',
  desc:
    'Cleverly, owned by Homyze, needed a solution to challenge the way major office buildings, retail and even care homes were maintained. Imagine the commercial management of 26 floors of office space in the Shad, London!\n \n Homyze wanted an integrated property maintenance and facilities management solution that will handle the workflow (requesting plumbers, gathering quotes, tracking onsite visit, completion of jobs, issuing of invoices, payment resolution etc) and all the paperwork that follows.',
  outComes: [
    '	By creating a custom application, DryKISS was able to build a desktop and mobile-friendly platform that will allow clients, vendors and suppliers to have access to important data and reporting at their fingertips.',
    'The application also provided for Planned Preventative Maintenance (PPM) to be in compliance with building regulations, security protocols and ensured services and equipment are all maintained at regular intervals.',
    'Real-time communication was a major feature of the platform, along with the ability to send "jobs" with before and after photos. Customised alerts and trigger events such as sensors were built into the platform to maximise usage and reduce maintenance costs ie: counting the number of times a bathroom door opens will result in an automated callout for a cleaner.',
    'Not only did it increase workflow efficiency, but it also tracked jobs and allows requests to be made all online without picking up a phone.'
  ],
  duration: '12 months',
  team: [
    {
      image: '/images/eachWork/cleverly/team/1.png',
      name: 'ian',
      link: 'ian'
    },
    {
      image: '/images/eachWork/cleverly/team/2.png',

      name: 'Kristian',
      link: 'kristian'
    },
    {
      image: '/images/eachWork/cleverly/team/3.png',

      name: 'ali',
      link: 'ali'
    }
  ],
  technologies: [
    {
      image: '/images/eachWork/cleverly/technologies/1.svg',
      name: 'hasura',
      link: 'hasura'
    },
    {
      image: '/images/eachWork/cleverly/technologies/2.svg',
      name: 'react',
      link: 'react'
    },
    {
      image: '/images/eachWork/cleverly/technologies/3.svg',
      name: 'next',
      link: 'next'
    },
    {
      image: '/images/eachWork/cleverly/technologies/4.svg',
      name: 'asdasdasdas',
      link: 'hasura'
    },
    {
      image: '/images/eachWork/cleverly/technologies/5.svg',
      name: 'asdasdasd',
      link: 'react'
    },
    {
      image: '/images/eachWork/cleverly/technologies/6.svg',
      name: 'aasda',
      link: 'next'
    }
  ]
}

const EachWork = () => {
  return (
    <>
      {meta && (
        <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />
      )}
      <SimplePageHeader
        title='Discover our works'
        sub='Lorem ipsum dolor sit amet, consectetuer'
        image='/images/ourWorks/head.svg'
      />
      <AC as={MaxContainer} mb='4rem'>
        <AC
          as={Row}
          customCss={css`
            border-bottom: 1px solid #e6e6e6;
          `}
          pb='3rem'
        >
          <AC as={Column} md={5} center>
            <Image src={initialData.introImage} alt={initialData.name} />
          </AC>
          <AC as={Column} selfCenter md={7}>
            <AC
              as={Image}
              src={initialData.introIcon}
              alt={initialData.introIcon}
            />
            <AC as='p' textSize='2.25rem' textColour='darkBlue' bold>
              {initialData.name}
            </AC>
            <AC as='p' textSize='1rem' textColour='#363940'>
              {initialData.shortDesc}
            </AC>
          </AC>
        </AC>
        <Row>
          <AC as={Column} md={9}>
            <AC as='p' textSize='2.25rem' textColour='darkBlue' bold>
              ِDescriptions
            </AC>
            <AC as='p' textSize='1rem' textColour='#363940' lineHeight='1.4rem'>
              {initialData.desc}
            </AC>
            <AC as='p' textSize='2.25rem' textColour='darkBlue' bold>
              Outcomes
            </AC>
            <AC as='ul'>
              {initialData.outComes.map((item, index) => {
                return (
                  <AC
                    key={'r' + index}
                    as='li'
                    textSize='1rem'
                    lineHeight='1.4rem'
                    textColour='#363940'
                    mb='0.5rem'
                  >
                    {item}
                  </AC>
                )
              })}
            </AC>
          </AC>
          <AC as={Column} md={3}>
            <AC as='p' textSize='1.25rem' textColour='darkBlue' semiBold>
              Project Duration
            </AC>
            <AC as='p' textSize='1rem' textColour='black' bold>
              {initialData.duration}
            </AC>
            <AC as='p' textSize='1.25rem' mb='1rem' textColour='darkBlue' semiBold>
              Team
            </AC>
            <AC wrap gap='1.5rem'>
              {initialData.team.map((item, idx) => {
                return (
                  <a href={item.link} key={'a' + idx}>
                    {<AC width='3rem' as={Image} src={item.image} alt={item.name} />}
                  </a>
                )
              })}
            </AC>

            <AC as='p' textSize='1.25rem' mb='1rem' textColour='darkBlue' semiBold>
              Technologies
            </AC>
						<AC wrap gap='1.5rem'>
              {initialData.technologies.map((item, idx) => {
                return (
                  <a href={item.link} key={'tech' + idx}>
                    {<AC width='3rem' as={Image} src={item.image} alt={item.name} />}
                  </a>
                )
              })}
            </AC>
          </AC>
        </Row>
      </AC>
    </>
  )
}

export default EachWork
