import AC from '../adaptorComponent'
import { Image, Text, MetaHead, Row, Column } from '@drykiss/industry-ui'
import {MaxContainer} from './maxContainer'


const SimplePageHeader = ({title,sub,image}) => {
  return (
    <AC as={MaxContainer} bgColour='light' pY='3rem' mb='3rem'  minHeight='523px' mdStyles={{minHeight:'unset'}} flex itemsCenter  >
      <AC
        as={Row}
        itemsCenter
        mdStyles={{ column: true, textCenter: true, pX: '1rem' }}
      >
        <AC as={Column} xs={12} md={6} mdStyles={{mb:'1rem'}} >
          <AC
            as='h1'
            textSize='4rem'
            textColour='darkBlue'
						fontFamily='Russo One'

            mb='2rem'
            mdStyles={{ textSize: '3rem' }}
          >
           {title}
          </AC>
          <AC
            as={Text}
            textSize='2.25rem'
            textColour='darkText'
            semiBold
            mdStyles={{ textSize: '2rem' }}
          >
            {sub}
          </AC>
        </AC>
        <Column xs={12} md={6}>
          <Image alt='Hero' src={image} />
        </Column>
      </AC>
    </AC>
  )
}
export default SimplePageHeader