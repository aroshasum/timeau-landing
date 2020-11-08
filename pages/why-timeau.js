import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Timeau - Why Timeau</title>
            <meta name="description" content="Why Timeau" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Why Timeau</h1>
                    </header>
                    <p>Employee privacy and empowerment are important to us. With every new feature, we work to ensure team members stay in control, that they understand how the software works, when it's running, and that they have access to all of their data.</p>
                    <p>Timeau works like a traditional time clock system that’s installed on a desktop or mobile device. You decide when to start the timer, and can easily stop it whenever you need to do something else.
                        The app only captures proof of work (screenshots, app and URL tracking, and activity rates) if your organization has these features turned on and you’re actively tracking time</p>
                    <h2>What each app tracks</h2>
                    <span className="image main"><img src="/static/images/hiw-banner.png" alt="" /></span>
                </div>
            </section>
        </div>
    </Layout>
)
