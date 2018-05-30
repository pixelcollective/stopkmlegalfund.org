import React from 'react'
import Link from "gatsby-link";

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-institution"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Stop KM Legal Defence Fund</h1>
                <p>Raising funds to cover legal defence costs stemming from civil disobedience in opposition to the Kinder Morgan Trans Mountain pipeline expansion.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><Link to="/apply" className="apply-link">Apply</Link></li>
                <li className="highlighted"><Link to="/donate/?amount=25" className="donate-link">Donate</Link></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Info</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
