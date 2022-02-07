import React from "react"
import Layout from "../components/layout"
import Website from "../components/website"
import About from "../components/about"
import SEO from "../components/seo"
import useWebsites from "../hooks/useWebsites"
import Image from "../components/image"
import { css } from "@emotion/core"
import photo from "../images/max.jpg"

const IndexPage = () => {
  const websites = useWebsites()
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Image />
      <div
        css={css`
          max-width: 95%;
          img {
            max-width: 300px;
            width: 90%;
            border: solid 3px var(--blue);
            border-radius: 25px;
          }
          h1 {
            margin: 5rem 0;
          }
          h3 {
            margin: 5rem auto;
          }
          p {
            margin-bottom: 10rem;
          }
          @media (min-width: 768px) {
            h1 {
              font-size: 4rem;
            }
          }
          @media (min-width: 992px) {
            h2 {
              font-size: 3rem;
            }
            h3 {
              font-size: 2rem;
            }
          }
        `}
      >
        <h3>
          Passionate about creating pixel-perfect responsive user interfaces
        </h3>
        <img src={photo} alt={"Max Monis"} />
        <p>Not really Tom Hardy (sorry)</p>
        <h1>Portfolio</h1>
      </div>
      {websites.map((website, i) => (
        <Website key={website.url} website={website} i={i} />
      ))}
      <About />
    </Layout>
  )
}

export default IndexPage
