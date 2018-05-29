import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'

class Privacy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hide: 'hide',
    }
  }

  componentDidMount () {
    setTimeout(() => {
        this.show();
    }, 0);
  }

  show () {
    this.setState({hide: ''});
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description 
    return (
      <div className='privacy'>
        <div className={`${this.state.hide}`}>
          <Helmet>
              <title>{siteTitle}</title>
              <meta name="description" content={siteDescription} />
              <meta property="og:type"          content="article" />
              <meta property="og:title"         content="Contribute to the Stop KM Legal Fund" />
              <meta property="og:description"   content="Support the legal defence costs stemming from protest, civil disobedience, and direct action activities in opposition to Kinder Morgan" />
              <meta property="og:image"         content="https://s3-us-west-2.amazonaws.com/stopkmlegaldefencefund/static/feather.d671d4bf.jpg" />
              <meta property="og:url"           content="https://stopkmlegalfund.org" />
          </Helmet>
          <div className='policy'>
            <h1>Privacy Policy</h1>
            <p><Link className="noUnderline" to="/"><i className="fa fa-arrow-left" /> Back</Link></p>
            <h3>Cookies</h3>
            <p>Like most websites, Stop KM Legal Fund may place a "cookie," or small file, in the browser files of a visitor’s computer. We use cookies to save information so that you don’t have to re-enter it each time you visit our site. Certain features of our software platforms require that each Web page recognize your entire visit and remember which steps you have taken--this is called session tracking. Our website uses cookies, or a functionally equivalent technology, to track sessions. </p>
            <h3>Donor Privacy</h3>
            <p>Stop KM Legal Fund does not sell, trade or share our donors' personal information with anyone else, nor do we send donor mailings on behalf of other organizations. We will only share personal information if a donor/contributor has given us specific permission to do so.</p>
            <p>To process a charitable contribution or product purchase online, it is necessary for Stop KM Legal Fund to gather the visitor's name, email address, mailing address, phone, and credit card information. This data is used to verify identity and execute the financial transaction. Additionally, phone number and email address information may be used to contact donors if there is a problem with the transaction, or in the case of a recurring transaction. If you choose to make an online monetary transaction with Stop KM Legal Fund, your credit card information will be used only for transactions authorized through our secure online payment system. Stop KM Legal Fund does not retain credit card information or transmit credit card information to anyone else. Monthly recurring donations are processed through a secure online payment system designed for that purpose; Stop KM Legal Fund staff does not have access to full credit card numbers at any point in the online giving process.</p>
            <h3>Email Communication</h3>
            <p>We encourage you to voluntarily share your email address and other personally identifiable information with us, because we can’t build the movement we need to stop Kinder Morgan without your continued support. All such information is collected and stored in a manner appropriate to the nature of the data. Stop KM Legal Fund makes every effort to insure the secure collection and transmission of sensitive user information using industry-accepted data collection and encryption methodologies. You can <a href='https://actionnetwork.org/privacy'>read the privacy policy of our secure data collection and storage software, Action Network, for additional information on your email and information submitted via our signup or action pages</a>. We do not sell, trade, exchange, or reveal to anyone the specific or individual-level information in any data you provide us with, and neither does Action Network.</p>
            <Link to='/donate/' className='button'>Donate to the Fund</Link>
            <Footer noShow='privacy' />
          </div>
        </div>
      </div>
    )
  }
}

Privacy.propTypes = {
  route: React.PropTypes.object,
}

export default Privacy

export const pageQuery = graphql`
  query newPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
