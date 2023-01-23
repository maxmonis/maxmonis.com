import "./styles/_index.scss"
import About from "../components/about"
import Image from "../components/image"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import useWebsites from "../hooks/useWebsites"
import Website from "../components/website"

export default function Home() {
  const websites = useWebsites()
  return (
    <Layout>
      <SEO title="Portfolio" />
      <div className="Home">
        <Image />
        <div className="Home__content">
          <h1 className="Home__portfolio-title">Portfolio</h1>
          {websites.map((website, i) => (
            <Website key={website.url} website={website} i={i} />
          ))}
          <About />
        </div>
      </div>
    </Layout>
  )
}
