import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/core/layout"

const Bolg = () => {
    const data = useStaticQuery(
        graphql`
          query {
            allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
              edges {
                node {
                  frontmatter {
                    title
                    slug
                    date(formatString: "DD MMMM, YYYY")
                  }
                  timeToRead
                  excerpt
                  id
                }
              }
            }
          }
        `
      )    
  return (
    <Layout>
      <section className="bg-white mt-10 dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
            <div className="items-center lg:flex">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Blog page</h2>

                    <ul className="text-gray-500 dark:text-gray-400">
                        {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <li key={edge.node.id} className="mt-5">
                                <Link  className="text-indigo-600 dark:text-indigo-400 font-bold" to={`/blog/${edge.node.frontmatter.slug}/`}>
                                {edge.node.frontmatter.title}
                                </Link>
                                <div>
                                    <span className="text-sm text-gray-400 dark:text-gray-400 mb-5">
                                        Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                                        {edge.node.timeToRead} min read
                                    </span>
                                </div>
                                <p>{edge.node.excerpt}</p>
                            </li>
                        )
                        })}
                    </ul>

                </div>

                <div className="mt-8 lg:mt-0 lg:w-1/2">
                    <div className="flex items-center justify-center lg:justify-end">
                        <div className="max-w-lg">
                            <img className="object-cover object-center w-full h-64 rounded-md shadow" src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </Layout>
  )
}

export default Bolg