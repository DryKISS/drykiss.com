import AC from '../../components/adaptorComponent'
import { Button } from '@drykiss/industry-ui'

const postData = {
  title: 'Going against the grain, AngelPad kills its demo',
  categories: ['Technology'],
  mainImage: '/images/blog/blogPost1.png'
}

const BlogPost = () => {
  return (
    <>
      <AC
        height="600px"
        fullWidth
        bgImage={postData.mainImage}
        bgCover
        itemsCenter
        flexColumn
        pY="3rem"
      >
        <AC flexFiller />
        <AC maxWidth="750px" textCenter>
          <AC as="h1" textSize="2.25rem" textColour="white">
            Going against the grain, AngelPad kills its demo
          </AC>
          <AC wrap justifyCenter>
            {postData.categories.map((item, index) => {
              return (
                <AC key={'y' + index} as={Button} bgColour="#C7D3EE" textColour="darkBlue">
                  {item}
                </AC>
              )
            })}
          </AC>
        </AC>
      </AC>
    </>
  )
}
export default BlogPost
