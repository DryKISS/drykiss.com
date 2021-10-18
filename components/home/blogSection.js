import { MaxContainer } from '../common/maxContainer'
import AC from '../adaptorComponent'
import { Row } from '@drykiss/industry-ui'
import SectionTitleAndSubtitle from '../common/page/sectionTitleAndSubtitle'
import BlogCard from '../common/blogCard'

const BlogSection = ({ posts }) => {
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
          {posts &&
            posts.map((item, index) => {
              return <BlogCard key={index} item={item} />
            })}
        </Row>
      </AC>
    </>
  )
}

export default BlogSection
