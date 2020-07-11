const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog.js`)

    return graphql(`
        query loadPagesQuery ($limit: Int!) {
            allMarkdownRemark(limit: $limit){
                edges{
                    node{
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `, { limit: 1000 }).then(result => {
        if (result.errors) {
            throw result.errors
        }

    result.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          path: `/blog/${edge.node.fields.slug}`,
          component: blogPostTemplate,
          context: {
              slug: edge.node.fields.slug
          },
        })
      })
    })
}