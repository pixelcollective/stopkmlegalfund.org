import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'

class Apply extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hide: 'hide'
    }
  }

  componentDidMount () {
    window.addEventListener('can_embed_loaded', this.show());
  }

  show () {
    setTimeout(() => {
      this.setState({hide: ''});
    }, 1000);
  }

  render() {
    return (
      <div className='apply'>
        <div className={`${this.state.hide}`}>
          <Helmet>
              <title>Application for Financial Assistance</title>
              <meta name="description" content='The Stop KM Legal Defence Fund grants financial assistance to cover legal defence costs stemming from
              protest, civil disobedience, and direct action activities in opposition to the Kinder Morgan Trans Mountain pipeline
              expansion and tanker project.' />
              <meta property="og:type"          content="article" />
              <meta property="og:title"         content="Application for Financial Assistance" />
              <meta property="og:description"   content="Support the legal defence costs stemming from protest, civil disobedience, and direct action activities in opposition to Kinder Morgan" />
              <meta property="og:image"         content="https://s3-us-west-2.amazonaws.com/stopkmlegaldefencefund/static/feather.d671d4bf.jpg" />
              <link href='https://actionnetwork.org/css/style-embed-whitelabel-v3.css' rel='stylesheet' type='text/css' />
              <script src='https://actionnetwork.org/widgets/v3/form/application-for-financial-assistance?format=js&source=widget'></script>
          </Helmet>
          <div className='form'>
            <h1>Application for Financial Assistance</h1>
            <hr/>
            <p>The <strong>Stop KM Legal Defence Fund</strong> grants financial assistance to cover legal defence costs stemming from
protest, civil disobedience, and direct action activities in opposition to the Kinder Morgan Trans Mountain pipeline
expansion and tanker project. These costs include legal fees for criminal and contempt of court charges, civil
litigation, and related immigration or child custody/welfare issues, as well as travel costs and other expenses
associated with legal defence.</p>
<p>This application will be reviewed by the Stop KM Legal Defence Fund Operational Committee and approved by
Stop KM Legal Defence Fund Board. Applications are accepted online at https://stopkmlegalfund.org/ or at the
email address info@stopkmlegalfund.org.</p>
<p><strong> The next deadline for the StopKM Legal Defense Fund is Nov 15, 2018.</strong> Decisions will be made by the end of June. Future rounds of funding will also occur, pending availability of funds.</p>
<p><a className='button' href='https://file-tbiggngbrc.now.sh/'>Download: Application in PDF format</a></p>
<p>While being reviewed, all applicants will remain anonymous. All identifying information provided will be unavailable
to the reviewers in order to protect the confidentiality of the applicants. Once submitted, all application forms will
be stored securely. If the Stop KM Legal Defence Fund is not able to grant assistance at this time and you continue
to need support, we encourage applicants to reapply in the next round of funding.</p>
<p>If you are a defendant and you need help paying for your legal costs, please complete the application form,
providing all required information and provide supporting documentation. If you are a lawyer applying to the <strong>Stop
KM Legal Defence Fund</strong>, please work with your client to complete the application below.
A decision will be made about your application within a month of the deadline for submission. A notification of
determination will be emailed and/or mailed to the address you have provided below. Please note that incomplete
applications may not be considered.</p>
<p>We are aware that the following questions are highly personal and sensitive, and ask about your access to financial
resources. While you may choose not to answer any questions that you find objectionable, your assistance will
help us determine the allocation of the available funds.</p>
<p>Determinations on all applications will be based on the risk of harm and the level of need faced by individual
defendants. The purpose of the <strong>Stop KM Legal Defence Fund</strong> is to put solidarity into action. As such, particular
consideration will be given to the needs of defendants that result from structural inequalities including colonialism,
race, gender, sexuality, class and ableism.</p>
<p>If you need assistance filling out this application, please email info@stopkmlegalfund.org</p>
<p><strong>Note:</strong> Although the <strong>Stop KM Legal Defence Fund</strong> wishes it had the ability to fund the legal costs of all those who
stand against the Kinder Morgan pipeline expansion, it cannot. There is no guarantee funds will be granted based
on the submission of this application.</p>
<p><strong>Note:</strong> Applicants who are eligible for legal aid through the Legal Services Society of BC but are applying to the
Defence Fund to retain privately funded counsel will need to provide compelling information regarding their
reasons for not applying for or making use of legal aid/LSS funding. All applicants are strongly encouraged to apply
for legal aid and submit all necessary information (such as changes to income), in order to ensure legal
representation.</p>
            <div id='can-form-area-application-for-financial-assistance' />
            <div className="clear" />
            <Link className="noUnderline" to="/"><i className="fa fa-arrow-left" /> Back</Link>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

Apply.propTypes = {
  route: React.PropTypes.object,
}

export default Apply

export const pageQuery = graphql`
  query applyQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
