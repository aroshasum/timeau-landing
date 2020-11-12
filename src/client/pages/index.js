import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic011.jpg')`}}>
                        <header className="major">
                            <h3>Features</h3>
                            <p>Advanced Features like Time Tracking, GPS Tracking, Detailed Reporting and Online Invoicing</p>
                        </header>
                        <Link href="/features"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic021.jpg')`}}>
                        <header className="major">
                            <h3>How It Works</h3>
                            <p>Tracking your time is as simple as pushing a button on your computer or smartphone. The days of your team reporting hours with pen and paper timesheets are over.</p>
                        </header>
                        <Link href="/how-it-works"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic031.jpg')`}}>
                        <header className="major">
                            <h3>Why Timeau?</h3>
                            <p>Timeau Time Tracking Software suit is the No.1 time tracking software for workers in Australia.
                                Mainly targeted employees who work at different locations in different time periods.
                                <br />Employee privacy and empowerment are important to us. With every new feature,
                                we work to ensure team members stay in control, that they understand how the software works,
                                when it's running, and that they have access to all of their data.</p>
                        </header>
                        <Link href="/why-timeau"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic041.jpg')`}}>
                        <header className="major">
                            <h3>Pricing</h3>
                            <p>Choose the plan that's right for your team</p>
                        </header>
                        <Link href="/pricing"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic051.jpg')`}}>
                        <header className="major">
                            <h3>Demo</h3>
                            <p>Check out our short demo to see how teams get more done with Timeau.</p>
                        </header>
                        <Link href="/demo"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic061.jpg')`}}>
                        <header className="major">
                            <h3>Contact Us</h3>
                            <p>Contact us for more personalised assistance.</p>
                        </header>
                        <Link href="/contact-us"><a className="link primary"></a></Link>
                    </article>
                </section>
                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>One click to clock in and out</h2>
                        </header>
                        <p>Track your crew’s time spent at each client location. No matter what device they’re using, you’ll be able to keep track of your crew’s time cards.</p>
                        <ul className="actions">
                            <li><Link href="/features"><a className="button next">Check out more features</a></Link></li>
                        </ul>
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
