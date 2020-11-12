import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Timeau - Features</title>
            <meta name="description" content="Landing Page" />
        </Head>

        <div>
            <BannerLanding />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Advanced Time Tracking</h2>
                        </header>
                            <ul>
                                <li>Focus more on completing work than tracking it</li>
                                <li>Timesheet app records time spent on projects</li>
                                <li>Smart web, desktop, and mobile apps</li>
                                <li>Feature-rich dashboard for easy team management</li>
                            </ul>
                    </div>
                </section>
                <section id="two" className="spotlights">
                    <section>
                        <Link href="/contact-us">
                            <a className="image" style={{opacity: 0.6, background: 'url(/static/images/timeau-banner.png)', backgroundSize: 'contain'}}>
                                </a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>GPS Tracking</h3>
                                </header>
                                <ul>
                                    <li>Easily monitor mobile time and attendance</li>
                                    <li>Automate location tracking with geofences</li>
                                    <li>Keep teams moving — Hubstaff runs in the background</li>
                                    <li>Download on iOS and Android devices</li>
                                </ul>
                                <ul className="actions">
                                    <li><Link href="/contact-us"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/contact-us">
                            <a className="image" style={{opacity: 0.6, background: 'url(/static/images/no-icon-banner.png)', backgroundSize: 'contain'}}>
                            </a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Online Invoicing</h3>
                                </header>
                                <ul>
                                    <li>Easily track billable time with simple apps</li>
                                    <li>Automate invoicing for quick payments</li>
                                    <li>Generate professional invoices in minutes</li>
                                    <li>Track invoice statuses in one place</li>
                                </ul>
                                <ul className="actions">
                                    <li><Link href="/contact-us"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/contact-us">
                            <a className="image" style={{opacity: 0.6, background: 'url(/static/images/timeau-banner.png)', backgroundSize: 'contain'}}>
                            </a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Detailed Reporting</h3>
                                </header>
                                <ul>
                                    <li>Build detailed and actionable time reports</li>
                                    <li>Avoid errors with accurate timesheet reporting</li>
                                    <li>Craft budgets and know a project’s true cost</li>
                                    <li>Pay your team based on hours worked</li>
                                </ul>
                                <ul className="actions">
                                    <li><Link href="/contact-us"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
