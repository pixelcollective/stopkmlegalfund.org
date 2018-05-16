import React from 'react'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"><a href="/">Stop KM Legal Defence Fund</a> works in collaboration with <a href='http://terminalcitylegal.org'>The Terminal City Legal Collective</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: React.PropTypes.bool
}

export default Footer
