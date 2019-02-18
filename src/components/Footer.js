import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"><a href="/">Stop KM Legal Defence Fund</a> works in collaboration with <a href='http://terminalcitylegal.org'>The Terminal City Legal Collective</a></p>
        <p className="privacy-link" style={props.noShow ? {display: 'none'} : {}}><Link to='/privacy/'>Privacy policy</Link></p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
