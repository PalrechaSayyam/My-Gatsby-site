// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { intro,
        introContent,
        backgndImg,
        btn,
        btnWrapper,
        about,
        blog,} from "../components/index.module.css";
import ContactPage from "../components/contact"        

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
      </Layout>
      <div className={intro}>
        <div className={backgndImg}>
          <StaticImage 
          src="../images/backgnd.png" alt=""
          layout="fullWidth"
          placeholder="blurred" />
        </div>
        <div className={introContent}>
          <h2>START YOUR FINANCIAL JOURNEY HERE.</h2>
          <h2>LEARN HOW TO BE FINANCIALLY INDEPENDENT</h2>
          <h3>Achieve Financial Freedom: Plan a Better Future</h3>
          <p>In today's world, achieving financial independence is what every individual seeks for. It's not just about having a stable source of income, it gives the individual control over their finances.but, before one tries to achieve financial independence they need to understand what financial freedom means to them. This is the first step towards achieving financial freedom. It empowers individuals to live their lives on their own terms.</p>
          <p>First define your financial goals. Create a list of what you want to achieve based on your lifestyle. Take your time, decide what you want to do in future, is it retiring early or traveling all over the world. Having a specific goal to achieve provides you with a clear direction to go to.</p>
          <p>Second, have a budget and follow it. You need to be patient as you have to follow it in a long run. The budget should align with your goals. Analyze your expenditure and realise the flow of money, you should know where you spend the most and where you spend unnecessary. Cut your expenses where you feel its not required. Identify where you have fixed expenses. adjust your budget and review it time to time.</p>
          <p>Boost your income. Boosting your income would make your work easier, consider doing a part-time job or freelancing or pursuing higher education. Invest in self-improvement and continuously seek ways to increase your professional value.</p>
          <p>Investing can be a transformative factor for attaining financial independence. Invest wisely, investing helps your money to grow over time. Diversify your portfolio to spread risk and maximize potential returns. Review your portfolio and ensure that your investments are on par with your goals.</p>
          <p>Regularly monitor your progress and generate comprehensive reports from the outset. This practice will facilitate a thorough analysis of any errors made and enable you to identify necessary corrective measures to prevent their recurrence in the future. Engaging in this process will yield valuable feedback that can positively impact your financial journey.</p>
          <div className={btnWrapper}>
          <Link to="/about" className={btn}><button className={about}>About</button></Link>
          <Link to="/blog" className={btn}><button className={blog}>Blog</button></Link>
          </div>
        </div>
      </div>
      <ContactPage>
        <>
        </>
      </ContactPage>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage