/**
 * Domains
 * Lists domains owned by DryKISS and shortlinks to various management tools.
 */

// Layout
import { Page } from 'layout/page'

// UI
import { Link, Table } from 'industry-ui'

// Data
import { Domains as Data } from 'data'

export default () => {
  const Columns = () => [
    {
      formatter: DomainLink,
      text: 'Domain'
    },

    {
      formatter: AnalyticsLink,
      text: 'Analytics'
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
      formatter: WhoisLink,
      text: 'Whois'
    }
  ]

  const AnalyticsLink = ({ analytics }) =>
    <Link to={`https://analytics.google.com/analytics/web/#/report-home/${analytics}`}>
      <a target='_blank'>Analytics</a>
    </Link>

  const ConsoleLink = ({ domain }) =>
    <Link to={`https://search.google.com/search-console?sc-domain:${domain}`}>
      <a target='_blank'>Console</a>
    </Link>

  const DomainLink = ({ domain }) =>
    <Link to={`https://${domain}`}>
      <a target='_blank'>{domain}</a>
    </Link>

  const ProviderLink = ({ domain, registrar }) =>
    <Link to={`https://dash.cloudflare.com/e59b2f1093dd43ce0ac14555d3d04249/${domain}`}>
      <a target='_blank'>{registrar}</a>
    </Link>

  const WhoisLink = ({ domain }) =>
    <Link to={`https://whois.domaintools.com/${domain}`}>
      <a target='_blank'>Whois</a>
    </Link>

  const meta = {
    description: `
      DryKISS is a full service internet and mobile digital production house.
      Our services span consulting, strategy; planning; development; testing
      and analytics.
    `,
    path: '/domains',
    title: 'DryKISS develops hybrid mobile and responsive websites'
  }

  return (
    <Page heading='Domains' meta={meta}>
      <Table
        columns={Columns()}
        rows={Data}
      />
    </Page>
  )
}
