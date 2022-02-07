import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const Background = styled(BackgroundImage)`
  width: 100%;
`
const Container = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.6),
    rgba(34, 49, 63, 0.6)
  );
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  text-align: center;
  height: 100%;
  h1,
  h2,
  h3 {
    margin: 5rem auto;
    color: white;
  }
`

const Image = () => {
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
  const copyright =
    "Warner Bros., Village Roadshow Pictures, Kennedy Miller Productions"
  const date = new Date()
  const hrs = date.getHours()
  const greeting = hrs < 12 ? "morning" : hrs < 17 ? "afternoon" : "evening"
  return (
    <>
      <Background tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <Container>
          <h2>Good {greeting} and welcome!</h2>
          <h1>My name is Max</h1>
          <h3>I'm a frontend web developer</h3>
        </Container>
      </Background>
      <p>{copyright}</p>
    </>
  )
}

export default Image
