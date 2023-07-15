import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { contactForm, sectionTitle,footer,footerLogo,
        logo, siteTitle } from '../components/contact.module.css'

const ContactPage = () => {
    return (
        <div>
            <div className={contactForm}>
                <h3 className={sectionTitle}>
                    Contact Us
                </h3>
                <p>Email (Required)</p>
                <input type="text/submit/hidden/button/image" name="" id="" value="" />
                <p>Message (Required)</p>
                <textarea name="" id="" rows="4" cols="40"></textarea>
                <p>* Required fields must be filled</p>
                <input class="contactSubmit" type="submit" name="" id="" value="send" />
            </div>
            <div className={footer}>
                <div class={footerLogo}>
                    <StaticImage className={logo} alt="Lambda Logo"
                    src="../images/lambda.jpg"
                    width={40}
                    height={40} />
                    <h2 className={siteTitle}>The Finance Insider</h2>
                </div>
            </div>
        </div>
    )
}

export default ContactPage