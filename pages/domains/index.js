/**
 * Domains
 * Lists domains owned by DryKISS and shortlinks to various management tools.
 */

// Layout
import { Page } from 'layout/page'

// UI
import {
  Container,
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
      hidden: true,
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
      <a target='_blank'>Analytics</a>
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
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/domains',
    title: `DryKISS develops hybrid mobile and responsive websites`
  }

  return (
    <Page meta={meta}>
      <Container>

        <PageHeading heading='Domains' />

        <Table
          columns={Columns(ConsoleLink, DomainLink, ProviderLink)}
          rows={Data}
        />

      </Container>
    </Page>
  )
}

export default Domains
