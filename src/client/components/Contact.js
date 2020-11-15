const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <div style={{paddingBottom: 55}}>
                    <div>This product development is currently in progress. </div>
                    <div>Please send your enquiry to <strong>timeautracker@gmail.com</strong> to get early customer benefits!!! </div>
                    <div>Thank you for reaching us!</div>
                </div>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">timeautracker@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>+61 470 466 328</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>11 Red Brush Drive<br />
                        Keysborough, VIC 3173<br />
                        Australia</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
