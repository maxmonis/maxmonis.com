import { graphql, useStaticQuery } from "gatsby"

export default function useArticles() {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsArticle(sort: { fields: [published], order: DESC }) {
        nodes {
          title
          text
          blurb
          slug
          published
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return data.allDatoCmsArticle.nodes.map(article => {
    const { title, image, text, blurb, slug, published } = article
    return { title, image, text, blurb, slug, published }
  })
}
