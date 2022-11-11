import "./styles/_article.scss"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "./layout"
import React from "react"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    allDatoCmsArticle(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        text
        published
        image {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default function Article({
  data: {
    allDatoCmsArticle: { nodes },
  },
  pageContext,
}) {
  const { next, previous } = pageContext
  const { title, text, image, published } = nodes[0]
  const date = new Date(published).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  })
  const numWords = text.split(" ").length
  const minRead = Math.ceil(numWords / 1250) * 5
  return (
    <Layout>
      <SEO title={title} />
      <div className="Article">
        <main className="Article__main">
          <h1 className="Article__title">{title}</h1>
          <Image fluid={image.fluid} />
          <h5 className="Article__date">{date}</h5>
          <h6 className="Article__length">{minRead} minute read</h6>
          <div className="Article__content">
            {text.split(/\r|\n/).map((paragraph, i) => (
              <p className="Article__paragraph" key={i}>
                {paragraph}
              </p>
            ))}
          </div>
        </main>
        <div className="Article__link-container">
          <div className="Article__link-section">
            {previous && (
              <Link className="Article__link" to={`../${previous}`}>
                &#9668; Previous
              </Link>
            )}
            {next && (
              <Link className="Article__link" to={`../${next}`}>
                Next &#9658;
              </Link>
            )}
          </div>
          <div className="Article__link-section">
            <Link className="Article__link" to="/">
              Home
            </Link>
            <Link className="Article__link" to="/blog">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
