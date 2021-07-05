import { Column, Image, Text, Link } from '@drykiss/industry-ui'
import { Addresses, CmsAddress } from '../../config/constants'
import { PageAddresses } from '../../config/navigation'
import AC from '../adaptorComponent'

const BlogCard = ({ item, full, ...props }) => {
  console.log(item)
  return (
    <AC
      {...props}
      as={Column}
      md={4}
      sm={12}
      flexColumn
      itemsStart
      minHeight="30rem"
      pX="1rem"
      smStyles={{
        mY: '1.5rem',
        pX: '1rem'
      }}
      mdStyles={{
        pX: '2.5rem',
        mY: '1.5rem'
      }}
      {...(full && { itemsCenter: true, mb: '4rem', pX: '0' })}
    >
      <Image src={item.image.url} alt={item.image} />
      <AC
        as={Text}
        mY="1.5rem"
        bold
        textColour="#6C6C6C"
        {...(full && { textSize: '2.25rem', width: '728px' })}
        mdStyles={{ width: 'unset' }}
        textCenter
      >
        {item.title}
      </AC>
      <AC mb="1.5rem">
        <AC
          as={Text}
          fontFamily="Poppins"
          {...(full && { width: '1110px' })}
          mdStyles={{ width: 'unset' }}
          textCenter
        >
          {item.short.length > 70 ? item.short.slice(0, 70) + '...' : item.short}
        </AC>
      </AC>
      <AC flexFiller />
      <AC as={Link} to={`${PageAddresses.Blog}/${item.id}`} textColour="primary">
        Read More
      </AC>
    </AC>
  )
}
export default BlogCard
