import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
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
