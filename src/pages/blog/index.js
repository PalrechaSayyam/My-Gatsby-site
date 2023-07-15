import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import Seo from '../../components/seo'
import {container} from '../blog/blog.module.css'

const BlogPage = ({data}) => {
  return (
    <div>
      <Layout pageTitle="My Blog Posts">
      </Layout>
      <div className={container}>
      {
      data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))
    }
      </div>
    </div>
    
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
  `

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage