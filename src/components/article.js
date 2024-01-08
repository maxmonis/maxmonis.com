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
        blurb
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
    allDatoCmsArticle: {
      nodes: [
        {
          blurb,
          image: { fluid },
          published,
          text,
          title,
        },
      ],
    },
  },
  pageContext: { next, previous },
}) {
  const date = new Date(published).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  })

  return (
    <Layout>
      <SEO title={title} description={blurb} />
      <div className="Article">
        <main className="Article__main">
          <h1 className="Article__title">{title}</h1>
          <div className="Article__image-container">
            <Image fluid={fluid} />
          </div>
          <h6 className="Article__date">{date}</h6>
          <div className="Article__content">
            {text.split(/\r|\n/).map((paragraph, i) => (
              <p
                className="Article__paragraph"
                dangerouslySetInnerHTML={{ __html: paragraph }}
                key={i}
              ></p>
            ))}
          </div>
        </main>
        <div className="Article__link-container">
          <div className="Article__link-section">
            {previous && (
              <Link className="Article__link" to={`../${previous}`}>
                Back
              </Link>
            )}
            {next && (
              <Link className="Article__link" to={`../${next}`}>
                Next
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
