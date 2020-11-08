import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Timeau - Pricing</title>
            <meta name="description" content="Pricing" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Pricing</h1>
                    </header>
                    <h2>Choose the plan that's right for your team</h2>
                    <span className="image main"><img src="/static/images/pricing-banner.png" alt="" /></span>
                </div>
            </section>
        </div>
    </Layout>
)
