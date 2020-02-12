/**
 * Minesoft Thesaurus
 */

// UI
import { Column, Divider, Heading, Image, Link, List, Page, Row } from 'industry-ui'

export default () => {
  const meta = {
    description: `
    Minesoft - Patbase thesaurus - DryKISS
    `,
    path: '/pages/portfolio/site/minesoft-thesaurus',
    title: 'Minesoft - Patbase thesaurus - DryKISS',
    author: 'Ian Warner',
    type: 'article',
    image: '/static/portfolio/Minesoft/hero.png'
  }

  return (
    <Page heading='Minesoft' meta={meta}>
      <Row>
        <Column md={3}>
          <Image
            alt='minesoft-chemical'
            src='/static/portfolio/minesoft/minesoft-thesaurus/minesoft-chemical.png'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='minesoft-edit'
            src='/static/portfolio/minesoft/minesoft-thesaurus/minesoft-edit.png'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='minesoft-language'
            src='/static/portfolio/minesoft/minesoft-thesaurus/minesoft-language.png'
          />
        </Column>
        <Column md={3}>
          <Image
            alt='minesoft-search'
            src='/static/portfolio/minesoft/minesoft-thesaurus/minesoft-search.png'
          />
        </Column>
      </Row>

      <Divider size='lg' />

      <Row>
        <Column md={3}>
          <Heading content='What we did' tag='h2' />

          <Heading content='Links' tag='h3' />

          <Link to='http://minesoft.com/'>
            <a target='_blank'>Minesoft</a>
          </Link>
          <p />

          <Link to='http://www.patbase.com/'>
            <a target='_blank'>Patbase</a>
          </Link>
          <p />

          <Heading content='Tasks' tag='h3' />

          <List>
            <span>APIs</span><br />
            <span>One-page application</span><br />
            <span>UX</span><br />
            <span>Design</span><br />
            <span>Responsive development</span><br />
            <span>Deployment</span><br />
            <span>Analytics</span>
          </List>

          <Heading content='Project Duration' tag='h3' />

          <List>
            <span>40 days development</span>
          </List>

          <Heading content='Outcome' tag='h3' />

          <List>
            <span>Delivered on time</span><br />
            <span>Deployed successfully</span>
          </List>

          <Heading content='Team' tag='h3' />

          <List>
            <span>Ian Warner - Technical Lead</span>
          </List>

        </Column>

        <Column md={9}>
          <Heading content='Description' tag='h2' />

          <p>In one view the service allows a user to search for a chemical term,
        returning data from several external APIs to create a concise data
        sheet. Returned synonyms can then be utilised in further searches;
        allowing the user to discover more obscure patents.
          </p>
          <p>MineSoft is one of the most prominent Patent information and search
            companies in the world. They have created and maintain several key
            browser based software tools; used by thousands of lawyers, patent
            specialists and organisations daily.
          </p>
          <p>MineSoft approached DryKISS to create an addon to their most popular
            service PatBase. They required a tool that allowed users to search
            for similar words, compounds, genes or translations.
          </p>
          <p>The product would go on to be called "Patbase Thesaurus"
          </p>

          <h3>Goal</h3>
          <p>Allow users to discover words that they may have not known before, all
            of these entries could then be added to a string to search the PatBase
            database of Patents.
          </p>
          <p>It would mean that patents using obscure wording could be discovered
            by the users.
          </p>

          <h3>Deliverables</h3>
          <p>Create a tool that is easy to use for current PatBase users.
          </p>
          <p>Full browser compatibility.
          </p>
          <p>UI Translated into several languages including Chinese.</p>
          <p>Ability to browse back to a previous search.</p>
          <p>Shopping basket word saving.</p>
          <p>Words translated into a PatBase query.</p>

          <h3>Development</h3>
          <p>In a forty day window we worked through several different providers
            of chemical, gene and synonym data. Landing on WikiPedia, WIPO and
            ToxNet to provide the relevant data.
          </p>
          <p>Built a simplistic UI structure straight from Bootstrap, that fitted
            the current design requirements of PatBase.
          </p>

          <h3>Some nice features include:</h3>
          <p>Able to browse backwards and forwards and maintain the searches undertaken</p>
          <p>Shopping basket style add words to query functions</p>
          <p>Copy to clipboard</p>
          <p>Each result could be clicked to research on that, creating a mining pattern</p>
        </Column>
      </Row>
    </Page>
  )
}
