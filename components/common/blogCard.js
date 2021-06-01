import { Column, Image, Text, Link } from '@drykiss/industry-ui'
import AC from '../adaptorComponent'

const BlogCard = ({item,full,...props}) => {
  return (
    <AC
		{...props}

      as={Column}
      md={4}
      sm={12}
      flexColumn
      itemsStart
      minHeight='30rem'
      pX='1rem'
      smStyles={{
        mY: '1.5rem',
        pX: '1rem'
      }}
      mdStyles={{
        pX: '2.5rem',
        mY: '1.5rem'
      }}
			{...(full &&{itemsCenter:true,mb:"4rem"})}
    >
      <Image src={item.image} />
      <AC as={Text} mY='1.5rem' bold textColour='black' {...(full &&{textSize:'2.25rem'})} >
        {item.title}
      </AC>
      <AC mb='1.5rem'>
        <AC as={Text}>{item.descs}</AC>
      </AC>
      <AC flexFiller />
      <AC as={Link} to={item.bottomLink.to} textColour='primary'>
        {item.bottomLink.title}
      </AC>
    </AC>
  )
}
export default BlogCard
