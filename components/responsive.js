import { css } from 'styled-components'
import { Column, Row } from '@drykiss/industry-ui'
import AC from './adaptorComponent'

const Responsive = ({ component = 'div', sm = 12, md = 12, lg = 12, center, ...props }) => {
  return (
    <AC as={Row} fullWidth center={center}>
      <AC
        as={Column}
        lg={lg}
        md={md}
        sm={sm}
        customCss={css`
          padding: 0;
        `}
      >
        <AC as={component} width="100%" {...props} />
      </AC>
    </AC>
  )
}
export default Responsive
