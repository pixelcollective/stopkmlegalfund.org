import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import pic01 from '../images/pic01.jpg'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet>
            <title>{get(this, 'props.data.site.siteMetadata.title')}</title>
            <meta property="og:url"                content="https://stopkmlegalfund.org" />
            <meta property="og:type"               content="article" />
            <meta property="og:title"              content="Stop KM Legal Defence Fund" />
            <meta property="og:description"        content="Supporting legal defence costs stemming from protest, civil disobedience, and direct action activities in opposition to Kinder Morgan" />
            <meta property="og:image"              content="https://s3-us-west-2.amazonaws.com/stopkmlegaldefencefund/static/feather.d671d4bf.jpg" />
        </Helmet>

      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
