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
    const {
      blurb,
      image: { fluid },
      published,
      slug,
      text,
      title,
    } = article
    const numWords = text.split(" ").length
    const minRead = Math.ceil(numWords / 1250) * 5
    return { blurb, fluid, minRead, published, slug, text, title }
  })
}
