const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const response = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    response.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.frontmatter.slug}`,
        component: path.resolve("./src/templates/post.js"),
        context: {
          slug: edge.node.frontmatter.slug,
        },
      })
    })
  }