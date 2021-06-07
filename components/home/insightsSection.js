import { MaxContainer } from '../common/maxContainer'
import AC from '../adaptorComponent'
import { Row } from '@drykiss/industry-ui'
import SectionTitleAndSubtitle from '../common/page/sectionTitleAndSubtitle'
import BlogCard from '../common/blogCard'
const insightsData = [
  {
    image: '/images/insights/1.png',
    title: 'Going against the grain, AngelPad kills its demo',
    descs:
      'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
    bottomLink: {
      title: 'Read more',
      to: '/blog/1'
    }
  },
  {
    image: '/images/insights/2.png',
    title: 'Lawyaw uses AI to help lawyers draft faster',
    descs:
      'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
    bottomLink: {
      title: 'Read more',
      to: ''
    }
  },
  {
    image: '/images/insights/3.png',
    title: 'Tumblr confirms 84 accounts linked to the main stream',
    descs:
      'It’s no secret that much of the legal industry is build on reusable content. Most law firms  have their own customized set of standard…',
    bottomLink: {
      title: 'Read more',
      to: ''
    }
  }
]
const InsightsSection = () => {
  return (
    <>
      <SectionTitleAndSubtitle
        title="Insight to grow your business"
        subtitle="We have helped many customers to
        transformed their ideas intoa working digital products"
        maxTextWidth="1100px"
      />

      <AC
        as={MaxContainer}
        mb="6rem"
        smStyles={{
          pX: '1rem'
        }}
      >
        <Row>
          {insightsData.map((item, index) => {
            return <BlogCard key={index} item={item} />
          })}
        </Row>
      </AC>
    </>
  )
}

export default InsightsSection
