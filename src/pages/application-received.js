import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'

class ApplicationReceived extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hide: 'hide'
    }
  }

  render() {
    return (
      <div className='received'>
        <div className={`${this.state.hide}`}>
          <Helmet>
              <title>Application for Financial Assistance</title>
              <meta name="description" content='The Stop KM Legal Defence Fund grants financial assistance to cover legal defence costs stemming from
              protest, civil disobedience, and direct action activities in opposition to the Kinder Morgan Trans Mountain pipeline
              expansion and tanker project.' />
              <meta property="og:type"          content="article" />
              <meta property="og:title"         content="Contribute to the Stop KM Legal Fund" />
              <meta property="og:description"   content="Support the legal defence costs stemming from protest, civil disobedience, and direct action activities in opposition to Kinder Morgan" />
              <meta property="og:image"         content="https://s3-us-west-2.amazonaws.com/stopkmlegaldefencefund/static/feather.d671d4bf.jpg" />
              <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' />
              <script src='https://actionnetwork.org/widgets/v3/form/application-for-financial-assistance?format=js&source=widget'></script>
          </Helmet>
            <h2>Thank you for your submisison.</h2>
            <p>We will be in touch about the status of your application soon.</p>
            <Link className="noUnderline" to="/"><i className="fa fa-arrow-left" /> Back</Link>
            <Footer />
        </div>
      </div>
    )
  }
}

ApplicationReceived.propTypes = {
  route: React.PropTypes.object,
}

export default ApplicationReceived

export const pageQuery = graphql`
  query applicationReceivedQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
