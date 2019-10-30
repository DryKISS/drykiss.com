/**
 * Domains
 * Lists domains owned by DryKISS and shortlinks to various management tools.
 */

// UI
import { Link, Page, Table } from 'industry-ui'

// Data
import { Domains as Data } from 'data'

export default () => {
  const AnalyticsLink = ({ row }) => (
    <Link to={`https://analytics.google.com/analytics/web/#/report-home/${row.analytics}`}>
      <a target='_blank'>Analytics</a>
    </Link>
  )

  const ConsoleLink = ({ row }) => (
    <Link to={`https://search.google.com/search-console?sc-domain:${row.domain}`}>
      <a target='_blank'>Console</a>
    </Link>
  )

  const DomainLink = ({ row }) => (
    <Link to={`https://${row.domain}`}>
      <a target='_blank'>{row.domain}</a>
    </Link>
  )

  const ProviderLink = ({ row }) => (
    <Link to={`https://dash.cloudflare.com/e59b2f1093dd43ce0ac14555d3d04249/${row.domain}`}>
      <a target='_blank'>{row.registrar}</a>
    </Link>
  )

  const WhoisLink = ({ row }) => (
    <Link to={`https://whois.domaintools.com/${row.domain}`}>
      <a target='_blank'>Whois</a>
    </Link>
  )

  const Columns = [
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
      <Table columns={Columns} rows={Data} />
    </Page>
  )
}
