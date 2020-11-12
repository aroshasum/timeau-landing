import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Timeau - How It Works</title>
            <meta name="description" content="How It Works" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>How It Works. Ex: Cleaning Industry</h1>
                    </header>
                    <span className="image main"><img src="../static/images/cleaning-banner.jpg" alt="" /></span>
                    <p>Get a high-level view of projects, budgets, and locations so you can improve operations and keep clients happy.</p>
                    <p>Create job sites and geofences so you can better track mobile teams’ locations. With Timeau’s GPS time clock app, you’ll get a better understanding of how much time is spent at each site.</p>
                    <p>Timeau automatically sends you an accurate digital timesheet for your crew each day so you can better manage your cleaning business.</p>
                </div>
            </section>
        </div>
    </Layout>
)
