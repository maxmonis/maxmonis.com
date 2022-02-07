import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import Layout from "./layout"
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

const Article = ({
  data: {
    allDatoCmsArticle: { nodes },
  },
  pageContext,
}) => {
  const { next, previous } = pageContext
  const { title, text, image, published } = nodes[0]
  const date = new Date(published).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const numWords = text.split(" ").length
  const minRead = Math.ceil(numWords / 1250) * 5
  return (
    <Layout>
      <SEO title={title} />
      <main
        css={css`
          margin: 3rem auto 0;
          max-width: 1200px;
          text-align: center;
          h1 {
            padding-bottom: 1rem;
          }
          h3,
          h4 {
            padding-top: 1rem;
          }
          p {
            padding: 1rem 10% 0;
          }
          @media (min-width: 768px) {
            h1 {
              font-size: 4rem;
              padding-bottom: 2rem;
            }
            h3 {
              font-size: 2rem;
              padding-top: 3rem;
            }
          }
        `}
      >
        <h1>{title}</h1>
        <Image fluid={image.fluid} />
        <h3>{date}</h3>
        <h4>{minRead} minute read</h4>
        <div
          css={css`
            text-align: left;
            max-width: 1000px;
            @media (min-width: 768px) {
              p {
                font-size: 1.2rem;
              }
            }
          `}
        >
          {text.split(/\r|\n/).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </main>
      <div
        css={css`
          padding-top: 5rem;
          text-transform: uppercase;
          a {
            margin: 1rem;
            font-size: 20px;
            :hover {
              border-bottom: 1px solid var(--blue);
            }
          }
          div {
            height: 5rem;
          }
        `}
      >
        {previous && <Link to={`../${previous}`}>&#9668; Previous</Link>}
        {next && <Link to={`../${next}`}>Next &#9658;</Link>}
        <div />
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </Layout>
  )
}

export default Article
