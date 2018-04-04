import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/banner-march.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="donate" className={`${this.props.article === 'donate' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contribute to the fund</h2>
          <p>// donation form</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About the Fund</h2>
          <p>Kinder Morgan, a US-based oil and gas infrastructure corporation, is attempting to triple the capacity of its Trans Mountain Pipeline, running from the Alberta Tar Sands to Vancouver’s Burrard Inlet. It is doing so without the consent of many of the First Nations whose unceded territories the pipeline crosses. Indigenous land and water protectors and community members and groups concerned about Indigenous rights, the likelihood of oil spills, climate change, and the planned 700% increase in tanker traffic in Vancouver’s harbour and the Salish Sea are taking action by defying a court injunction meant to restrict protest at Kinder Morgan’s Burnaby facilities. The arrests are mounting and these land and water protectors need our support.</p>

          <p>The purpose of the <strong>Stop KM Legal Defence Fund</strong> is to hold collect and distribute funds raised to support legal defence costs stemming from protest, civil disobedience, and direct action activities in opposition to the Kinder Morgan Trans Mountain pipeline expansion and tanker project. These costs include legal fees for criminal and contempt of court charges, civil litigation, and related immigration or child custody/welfare issues as well as travel costs and other associated legal defence expenses.
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>// contact info</p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main