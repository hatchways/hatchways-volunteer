/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

/*
    Create dynamic pages
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allVolunteerListingsJson {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("Error loading projects!", reporter.errors)
  }

  result.data.allVolunteerListingsJson.edges.forEach(edge => {
    const project = edge.node

    actions.createPage({
      path: `/project/${project.id}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        projectId: project.id,
      },
    })
  })
}
