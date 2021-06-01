
import InfoRow from '../common/infoRow'
import { MaxContainer } from '../common/maxContainer'

const ourServicesData = [
  {
    image: '/images/ourServices/1.svg',
    title: 'Startup Solutions',
    sub: 'We help startups reduce their time-to-market',
    desc:
      'Let DryKISS take care of your technical requirements while you focus on your business requirements. Reduce your time to market and stop spending on assembling an in-house development team for your startup. We can help you with:',
    bullets: [
      'Prototype Design ',
      'Single Feature MVP',
      'Pilot MVP Development',
      'UI/UX Design',
      'Website Design',
      'CMS Solutions'
    ]
  },
  {
    image: '/images/ourServices/2.svg',
    title: 'Development',
    sub: 'We help companies meet their web and mobile application needs',
    desc:
      'Evolve your business with the perfect application designed to your custom needs. Use DryKISS skill set and expertise to turn your ideas into perfectly working products. We offer:',
    bullets: [
      'Web Application Development',
      'Mobile Application Development',
      'Cloud / SaaS Development',
      'API development',
      'E-commerce Solutions',
      'Custom Desktop Software Development'
    ]
  },
  {
    image: '/images/ourServices/3.svg',
    title: 'Digital Marketing',
    sub: 'Make your brand stand out in this cluttered digital world',
    desc:
      'Make your company message ring loud and clear from all the digital noise. DryKISS can strategise, plan and curate a digital marketing plan for your business. You can get more traffic, more engagement and more leads using the following services:',
    bullets: [
      'Content Marketing',
      'Social Media Management',
      'Social Media Marketing',
      'SEO',
      'PPC',
      'Email Marketing'
    ]
  }
]
const OurServicesRows = () => {
  return (
    <MaxContainer>
      {ourServicesData.map((item, index) => {
        return <InfoRow key={'service'+index} item={item} index={index} />
      })}
    </MaxContainer>
  )
}

export default OurServicesRows
