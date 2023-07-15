import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { 
    container,
    topWrapper,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    headerLogo,
    logo} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
        <div className={topWrapper}>
          <header>
            <div className={container}>
              <div className={headerLogo}>
                <StaticImage className={logo} alt="Lambda Logo"
                src="../images/lambda.jpg"
                width={40}
                height={40} />
                <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
              </div>
              <div className={navLinks}>
                <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
              </div>
            </div>
          </header>
        </div>
  )
}

export default Layout