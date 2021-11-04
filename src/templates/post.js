import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/core/layout"

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: {frontmatter: {slug: {eq: $slug}}}) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
          }
          html
          timeToRead
        }
      }
    }
  }
`

const Post = props => {
  return (
    <Layout>
      <div className="mt-8 mx-auto prose prose-indigo prose-sm sm:prose lg:prose-lg xl:prose-xl">
        <h1>{props.data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
        <span>
          Posted on {props.data.allMarkdownRemark.edges[0].node.frontmatter.date}{" "}
          <span> / </span> {props.data.allMarkdownRemark.edges[0].node.timeToRead} min read
        </span>
        <div 
          dangerouslySetInnerHTML={{ __html: props.data.allMarkdownRemark.edges[0].node.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default Post