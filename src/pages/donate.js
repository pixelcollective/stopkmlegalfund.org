import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

class Donate extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description 
    return (
      <div>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <meta property="og:type"          content="article" />
            <meta property="og:title"         content="Contribute to the Stop KM Legal Fund" />
            <meta property="og:description"        content="Support the legal defence costs stemming from protest, civil disobedience, and direct action activities in opposition to Kinder Morgan" />
            <meta property="og:image"              content="https://s3-us-west-2.amazonaws.com/stopkmlegaldefencefund/static/feather.d671d4bf.jpg" />
            <script src='https://actionnetwork.org/widgets/v3/fundraising/stop-km-legal-defense-fund?format=js&source=widget&style=full' />
        </Helmet>
        <h1>Donate to the Stop KM Legal Fund</h1>
        <p><a className="noUnderline" href="/"><i className="fa fa-arrow-left" /> Back</a></p>
        <div id='can-fundraising-area-stop-km-legal-defense-fund' />
        <div className="clear" />
      </div>
    )
  }
}

Donate.propTypes = {
  route: React.PropTypes.object,
}

export default Donate

export const pageQuery = graphql`
  query NewPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
