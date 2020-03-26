import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'

class Update extends React.Component {

  render() {
    return (
      <div className='update'>
        <h4>STOP KM LEGAL DEFENCE FUND</h4>
        <h1>FUNDING DEADLINE UPDATE</h1>
        <h2>We're not currently accepting new application but stay tuned.</h2>
        <p>When we open the application process again, they can be submitted through our online form or sent by email to <a href="mailto:info@stopkmlegalfund.org">info@stopkmlegalfund.org</a>.</p>
        <p>Arrests have slowed for now but new applications involve Indigenous land defenders and cases are getting more expensive. We need to raise $10,000 to cover current legal costs and much more to prepare for another round of arrests as construction gets underway. Please give generously to support the efforts of land and water protectors!</p>
        <p>Emergency funds may still be available and applications are assessed on a case by case basis. To expedite an application in crisis situations, contact us at <a href="mailto:info@stopkmlegalfund.org">info@stopkmlegalfund.org</a>.</p>
        <p>We could not support people in stopping Trans Mountain without the generous support of our donors: <strong>THANK YOU!</strong></p>
      </div>
    )
  }
}

Update.propTypes = {
  route: React.PropTypes.object,
}

export default Update

export const pageQuery = graphql`
  query bannerQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
