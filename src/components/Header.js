import React from 'react'

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
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li className="highlighted"><a href="javascript:;" onClick={() => {props.onOpenArticle('donate')}} className="donate-link">Donate</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Board</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
