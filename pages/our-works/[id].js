/* eslint-disable max-len */
import { MetaHead, Row, Column, Image } from '@drykiss/industry-ui'
import { Brand, Canonical } from '../../config/config'
import SimplePageHeader from '../../components/common/head'
import { MaxContainer } from '../../components/common/maxContainer'
import AC from '../../components/adaptorComponent'
import styled, { css } from 'styled-components'
import { WorksPageService } from '../../services/pages-services/worksService'
import { CmsAddress } from '../../config/constants'
import ReactMarkdown from 'react-markdown'

const meta = {
  description: `DryKISS is a full service internet and mobile digital production house. Our
    services span consulting, strategy; planning; development; testing and analytics.`,
  path: '/',
  title: 'DryKISS develops hybrid mobile and responsive websites'
}

const initialData = {
  introImage: '/images/each-work/cleverly/intro-image.svg',
  introIcon: '/images/each-work/cleverly/project-icon.svg',
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
      image: '/images/each-work/cleverly/team/1.png',
      name: 'ian',
      link: 'ian'
    },
    {
      image: '/images/each-work/cleverly/team/2.png',

      name: 'Kristian',
      link: 'kristian'
    },
    {
      image: '/images/each-work/cleverly/team/3.png',

      name: 'ali',
      link: 'ali'
    }
  ],
  technologies: [
    {
      image: '/images/each-work/cleverly/technologies/1.svg',
      name: 'hasura',
      link: 'hasura'
    },
    {
      image: '/images/each-work/cleverly/technologies/2.svg',
      name: 'react',
      link: 'react'
    },
    {
      image: '/images/each-work/cleverly/technologies/3.svg',
      name: 'next',
      link: 'next'
    },
    {
      image: '/images/each-work/cleverly/technologies/4.svg',
      name: 'asdasdasdas',
      link: 'hasura'
    },
    {
      image: '/images/each-work/cleverly/technologies/5.svg',
      name: 'asdasdasd',
      link: 'react'
    },
    {
      image: '/images/each-work/cleverly/technologies/6.svg',
      name: 'aasda',
      link: 'next'
    }
  ]
}

export async function getStaticPaths() {
  const res = await WorksPageService.getWorks()
  const paths = res.props.posts.map((item) => {
    return { params: { id: item.id.toString() } }
  })
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params }) => {
  return WorksPageService.getSingleWork({ id: params?.id })
}

const heading = (props) => {
  const { children, level } = props
  switch (level) {
    case 1:
      return <h1 children={children} />
    case 2:
      return <H2 children={children} />
    case 3:
      return <h3 children={children} />
    case 4:
      return <h4 children={children} />
    case 5:
      return <h5 children={children} />
    case 6:
      return <h6 children={children} />

    // default to H6 if you try to get a heading of level 0 or 7, as an example
    default:
      return <h6 children={children} />
  }
}
const link = ({ children, href }) => {
  return (
    <Link to={href}>
      <a>{children}</a>
    </Link>
  )
}
const li = ({ children }) => {
  return (
    <AC as="li" mb="1rem">
      {children}
    </AC>
  )
}
const image = ({ alt, src, title }) => (
  <InPostImage alt={alt} src={`${CmsAddress}/${src}`} title={title} />
)

const EachWork = (props) => {
  const { post } = props
  if (!post) {
    return <></>
  }
  const { pageInfo } = post
  if (!pageInfo) {
    return <></>
  }
  const {
    headerImage,
    content,
    headerDesc,
    headerTitle,
    id,
    introDesc,
    introIcon,
    introImage,
    introTitle,
    projectDuration,
    teamMembers,
    tecnologies
  } = pageInfo
  return (
    <>
      {pageInfo && (
        <>
          {meta && <MetaHead canonical={Canonical} brand={Brand.name} meta={meta} />}
          <SimplePageHeader title={headerTitle} sub={headerDesc} image={headerImage.url} />
          <AC as={MaxContainer} mb="4rem" mdStyles={{ padding: '2rem' }}>
            <AC
              as={Row}
              customCss={css`
                border-bottom: 1px solid #e6e6e6;
              `}
              pb="3rem"
            >
              <AC as={Column} md={5} sm={12} center>
                <Image src={introImage.url} alt={introImage.url} />
              </AC>
              <AC as={Column} selfCenter md={7} sm={12}>
                <AC as={Image} src={introIcon.url} alt={introIcon.url} />
                <AC as="p" textSize="2.25rem" textColour="darkBlue" bold>
                  {introTitle}
                </AC>
                {introDesc.map((j, i) => {
                  return (
                    <AC key={i} as="p" textSize="1rem" textColour="#363940">
                      {j.text}
                    </AC>
                  )
                })}
              </AC>
            </AC>
            <AC as={Row}>
              <AC as={Column} md={9} sm={12}>
                {content && (
                  <RichWrapper>
                    <ReactMarkdown
                      children={content}
                      components={{
                        li,
                        heading,
                        link,
                        image
                      }}
                    />
                  </RichWrapper>
                )}
              </AC>
              <AC as={Column} md={3} sm={12}>
                <AC
                  as="p"
                  textSize="1.25rem"
                  textColour="darkBlue"
                  semiBold
                  mdStyles={{ textCenter: true }}
                >
                  Project Duration
                </AC>
                <AC as="p" textSize="1rem" textColour="black" bold mdStyles={{ textCenter: true }}>
                  {projectDuration}
                </AC>
                <AC
                  as="p"
                  textSize="1.25rem"
                  mb="1rem"
                  textColour="darkBlue"
                  semiBold
                  mdStyles={{ textCenter: true }}
                >
                  Team
                </AC>
                <AC wrap gap="1.5rem" mdStyles={{ center: true }}>
                  {teamMembers &&
                    teamMembers.map((item, idx) => {
                      return (
                        <a href={item.link} key={'a' + idx}>
                          {<AC width="3rem" as={Image} src={item.image.url} alt={item.title} />}
                        </a>
                      )
                    })}
                </AC>

                <AC
                  as="p"
                  textSize="1.25rem"
                  mb="1rem"
                  textColour="darkBlue"
                  semiBold
                  mdStyles={{ textCenter: true }}
                >
                  Technologies
                </AC>
                <AC wrap gap="1.5rem" mdStyles={{ center: true }}>
                  {tecnologies &&
                    tecnologies.map((item, idx) => {
                      return (
                        <a href={item.link} key={'tech' + idx}>
                          {<AC width="3rem" as={Image} src={item.image.url} alt={item.title} />}
                        </a>
                      )
                    })}
                </AC>
              </AC>
            </AC>
          </AC>
        </>
      )}
    </>
  )
}

export default EachWork
const H2 = styled.h2``
const RichWrapper = styled.div``
