import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta property="og:url"                content="https://stopkmlegalfund.org" />
<meta property="og:type"               content="article" />
<meta property="og:title"              content="Stop KM Legal Defence Fund" />
<meta property="og:description"        content="Supporting legal defence costs stemming from protest, civil disobedience, and direct action activities in opposition to Kinder Morgan" />
<meta property="og:image"              content="https://s3-us-west-2.amazonaws.com/stopkmlegaldefencefund/static/feather.d671d4bf.jpg" />
          {this.props.headComponents}
          {css}
          <script src='https://actionnetwork.org/widgets/v3/fundraising/stop-km-legal-defense-fund?format=js&source=widget' />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
