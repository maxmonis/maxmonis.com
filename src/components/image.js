import "./styles/_image.scss"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"

export default function Image() {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mad-max.jpeg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="Image">
      <BackgroundImage
        className="Image__background"
        tag="section"
        fluid={image.sharp.fluid}
        fadeIn="soft"
      >
        <div className="Image__content">
          <h2>My name is Max</h2>
          <h3>My world is software</h3>
        </div>
      </BackgroundImage>
      <p className="Image__copyright">
        Warner Bros., Village Roadshow Pictures, Kennedy Miller Productions
      </p>
    </div>
  )
}
