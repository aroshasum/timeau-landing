import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/features"><a><span onClick={props.onToggleMenu}>Features</span></a></Link></li>
                <li><Link href="/how-it-works"><a><span onClick={props.onToggleMenu}>How It Works</span></a></Link></li>
                <li><Link href="/why-timeau"><a><span onClick={props.onToggleMenu}>Why Timeau?</span></a></Link></li>
                <li><Link href="/pricing"><a><span onClick={props.onToggleMenu}>Pricing</span></a></Link></li>
                <li><Link href="/demo"><a><span onClick={props.onToggleMenu}>Demo</span></a></Link></li>
                <li><Link href="/contact-us"><a><span onClick={props.onToggleMenu}>Contact Us</span></a></Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
