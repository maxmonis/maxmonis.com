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
          <p className="Home__portfolio-intro">
            I build websites in my spare time for fun and to try out new tools
            and techniques. Most of the repos on{" "}
            <a
              href="https://github.com/maxmonis"
              rel="noreferrer"
              target="_blank"
            >
              my github
            </a>{" "}
            are public, and the following sites are currently deployed:
          </p>
          {websites.map((website, i) => (
            <Website key={website.url} website={website} i={i} />
          ))}
          <About />
        </div>
      </div>
    </Layout>
  )
}
