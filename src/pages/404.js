import "./styles/_404.scss"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function FourOhFour() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="FourOhFour">
        <h2>404: NOT FOUND</h2>
        <h5>
          Oops, looks like you attempted to access a route that doesn't exist
        </h5>
        <p>
          Please update the URL or{" "}
          <Link to="/">
            <b>return home</b>
          </Link>
        </p>
      </div>
    </Layout>
  )
}
