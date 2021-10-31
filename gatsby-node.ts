import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/tpl",
    component: require.resolve("./src/templates/tpl.tsx"),
    context: {},
  })
}
