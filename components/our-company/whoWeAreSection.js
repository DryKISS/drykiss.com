import AC from '../adaptorComponent'
import InfoRow from '../common/infoRow'
import { MaxContainer } from '../common/maxContainer'
import SectionTitleAndSubtitle from '../common/page/sectionTitleAndSubtitle'
const whoWeAreData = [
  {
    image: '/images/our-company/1.svg',
    title: 'Modern Technology',
    desc:
      'We design, build and launch Minimum Viable Products (MVP). Or iterate existing products. This helps you showcase social proof to potential investors at every round of funding from Venture Capital to Series A, B, C and IPO.\nSkilled at crafting responsive website design, app development, marketplaces and eCommerce, we help create products that validate your idea. We will craft it around your value proposition, proprietary technology and competitive advantage. Our core services cover strategy, planning, testing, analytics, design and build. From the first concept to the grand release.'
  },
  {
    image: '/images/our-company/2.svg',
    title: 'Modern Technology',
    desc: 'We can also help your startup:',
    bullets: [
      'Feel secure in having a team of experienced developers and professionals behind your initiatives;',
      'Create an amazing experience for your users;',
      'Successfully build your brand’s position and impress investors to accelerate the growth of your business.'
    ]
  },
  {
    image: '/images/our-company/3.svg',
    title: 'Modern Technology',
    desc: 'Our technology stack',
    bullets: ['React', 'JavaScript', 'NextJS', 'Node.js', '	Amazon AWS', 'IndustryUI design system']
  }
]
const WhoWeAreSection = () => {
  return (
    <>
      <SectionTitleAndSubtitle
        title="Who we are"
        subtitle="We are a full-service digital production studio, helping Startups, and their Founders, bring their ideas to market quickly."
        maxTextWidth="1100px"
      />
      <MaxContainer>
        {whoWeAreData.map((item, index) => {
          return <InfoRow key={'service' + index} item={item} index={index} />
        })}
      </MaxContainer>
      <AC
        as="p"
        maxWidth="725px"
        mY="4rem"
        mX="auto"
        textColour="darkText"
        textSize="1rem"
        lineHeight="1.4rem"
        textCenter
      >
        We have embraced full remote working throughout Europe. But that doesn't mean we compromise
        on talent and expertise. We are a tight-knit group dedicated to the craft of product
        building.
      </AC>
    </>
  )
}
export default WhoWeAreSection
