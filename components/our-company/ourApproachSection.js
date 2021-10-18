import AC from '../adaptorComponent'
import SectionTitleAndSubtitle from '../common/page/sectionTitleAndSubtitle'
import { Button, Image } from '@drykiss/industry-ui'
import { MaxContainer } from '../common/maxContainer'

const OurApproachSection = () => {
  return (
    <>
      <SectionTitleAndSubtitle
        title='Our Approach'
        subtitle='If you need software development processes to be tailored to your specific business needs, DryKISS is there to deliver high-quality software on time and within budget.'
        maxTextWidth='730px'
      />
      <AC fullWidth center mb='3.5rem'>
        <AC
          as={Button}
          bgColour='darkBlue'
          width='10rem'
          textSize='14px'
          elevation={1}
        >
          Review our Approach
        </AC>
      </AC>
      <AC as={MaxContainer} center mb='6rem'>
        <AC as={Image} alt='ourApproach' src='/images/our-company/our-approach/1.svg' width="calc(100% - 2rem)" maxWidth='720px' />
      </AC>
    </>
  )
}
export default OurApproachSection
