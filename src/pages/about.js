// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { container } from '../components/layout.module.css'
import ContactPage from "../components/contact"  

// Step 2: Define your component
const AboutPage = ({children}) => {
  return (
    <div>
      <Layout pageTitle="About Me">
        {children}
      </Layout>
      <div className={container}>
          <p>Welcome to our Finance website! We are dedicated to providing you with valuable information and resources to help you make informed financial decisions. Whether you're looking to manage your personal finances, explore investment opportunities, or stay updated on the latest market trends, we've got you covered.</p>

<p>At The Finance Insider, our mission is to empower individuals and businesses to achieve their financial goals. We believe that financial literacy is essential in today's complex world, and we strive to simplify financial concepts and provide actionable insights.</p>

<p>Our team of experienced financial experts is passionate about sharing their knowledge and expertise with you. Through our blog articles, guides, and educational resources, we aim to demystify finance and make it accessible to everyone.</p>

<h3>Key topics we cover include:</h3>
<li> Personal finance tips and budgeting</li>
<li>Investment strategies and portfolio management</li>
<li>Retirement planning and wealth building</li>
<li>Financial market analysis and trends</li>
<li>Tax planning and optimization</li>
<li>Business finance and entrepreneurship</li>

<p>We are committed to delivering high-quality, accurate, and up-to-date information. Our content is thoroughly researched and written by industry professionals who have a deep understanding of the financial landscape.</p>

<p>Whether you're a beginner or an experienced investor, our goal is to provide you with the knowledge and tools you need to navigate the financial world with confidence. We believe that financial well-being is within reach for everyone, and we're here to support you on your journey.

Thank you for visiting our website, and we hope you find our resources valuable. If you have any questions or suggestions, please don't hesitate to [contact us](/contact). We're here to help you on your path to financial success!</p>
      </div>
      <ContactPage>
        <>
        </>
      </ContactPage>
    </div>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage