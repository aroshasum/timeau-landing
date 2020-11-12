import Head from "next/head"

import Layout from '../components/Layout'
import Link from "./features";

export default () => (
    <Layout>
        <Head>
            <title>Timeau - Demo</title>
            <meta name="description" content="Demo" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Demo</h1>
                    </header>
                    <h2>Get a quick tour of Timeau</h2>
                    <p>Check out our short demo to see how teams get more done with Timeau. Then, sign up for your free 14-day trial.</p>
                    <div className="content">
                        <ul className="actions">
                            <li><a className="button">Start Free Trial</a></li>
                        </ul>
                    </div>

                    <span className="image main"><img src="../static/images/demo-banner.png" alt="" /></span>
                </div>
            </section>
        </div>
    </Layout>
)
