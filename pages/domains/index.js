/**
 * Domains
 * Lists domains owned by DryKISS and shortlinks to various management tools.
 */

// Config
import { BRAND, URL_BASE } from 'config'

// UI
import {
  Container,
  MetaHead,
  Link,
  PageHeading,
  Table
} from 'industry-ui'

// Data
import { Domains as Data } from 'data'

const Domains = () => {
  const Columns = (ConsoleLink, DomainLink, ProviderLink) => [
    {
      formatter: DomainLink,
      text: 'Domain'
    },
    {
      formatter: ProviderLink,
      text: 'Provider'
    },
    {
      formatter: ConsoleLink,
      text: 'Webmaster'
    },
    {
      formatter: AnalyticsLink,
      text: 'Analytics'
    },
    {
      text: 'Whois'
    }
  ]

  const AnalyticsLink = ({ analytics }) =>
    <Link to={
      {
        href: {
          pathname: `https://analytics.google.com/analytics/web/#/report-home/${analytics}`
        }
      }}>
      <a target='_blank'>analytics</a>
    </Link>

  const DomainLink = ({ domain }) =>
    <Link to={
      {
        href: {
          pathname: `https://${domain}`
        }
      }}>
      <a target='_blank'>{domain}</a>
    </Link>

  const ProviderLink = ({ provider }) =>
    <Link to={
      {
        href: {
          pathname: provider.link
        }
      }}>
      <a target='_blank'>{provider.name}</a>
    </Link>

  const ConsoleLink = ({ domain }) =>
    <Link to={
      {
        href: {
          pathname: `https://search.google.com/search-console`,
          query: {
            resource_id: `https://${domain}`
          }
        }
      }}>
      <a target='_blank'>Console</a>
    </Link>

  const meta = {
    canonical: URL_BASE,
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <>
      <MetaHead meta={meta} brand={BRAND} />

      <Container>

        <PageHeading heading='Domains' />

        <Table
          columns={Columns(ConsoleLink, DomainLink, ProviderLink)}
          rows={Data}
        />

      </Container>
    </>
  )
}

export default Domains
