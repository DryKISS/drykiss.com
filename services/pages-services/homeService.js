import { GetBlogPostsAPI, GetWorksAPI } from '../dataProvider'
import { google } from 'googleapis'
import { googleApiConfig, scopes, sheetId } from '../../config/constants'

const HomePageService = {
  getInitialData: ({ numberOfPosts }) => GetHomePageStaticProps({ numberOfPosts })
}
const GetHomePageStaticProps = async ({ numberOfPosts }) => {
  const jwt = new google.auth.JWT(
    googleApiConfig.client_email,
    null,
    // we need to replace the escaped newline characters
    googleApiConfig.private_key.replace(/\\n/g, '\n'),
    scopes
  )
  const sheets = google.sheets({ version: 'v4', auth: jwt })

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Why Next.js?'
  })

  const rows = response.data.values
  let data = []
  if (rows.length) {
    data = rows.map((row) => ({
      title: row[0],
      description: row[1],
      href: row[2] || null
    }))
  }
  console.log(data)

  const [posts, works] = await Promise.all([GetBlogPostsAPI({ numberOfPosts }), GetWorksAPI()])
  return {
    props: {
      posts,
      works
    },
    revalidate: 10
  }
}

export { HomePageService }
