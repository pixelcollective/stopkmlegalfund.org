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
        <h2>The next deadline for the StopKM Legal Defense Fund is Sept 30, 2018</h2>
        <p>As with the first and second rounds, for this third round, applications can be <a href="/apply">submitted through our online form</a> or sent by email to info@stopkmlegalfund.org.</p>
        <p>The fund has approximately $70,000 in it, and $18,000 has been allocated to applicants in the first round. Fundraising efforts continue.</p>
        <p>Emergency funds may be available and applications would be assessed on a case by case basis. To expedite an application in crisis situations, contact Kris Hermes or the Board at stopkmemergencyapplications@gmail.com.</p>
        <p>We voice our deep gratitude and appreciation for all the efforts of the water and land protectors. We could not protect these waters and lands without the generous support of our donors: <strong>THANK YOU!</strong></p>
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
