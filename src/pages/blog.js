import "./styles/_blog.scss"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Preview from "../components/preview"
import React, { useEffect, useState } from "react"
import SEO from "../components/seo"
import useArticles from "../hooks/useArticles"

export default function Blog() {
  const articles = useArticles()
  const [filtered, setFiltered] = useState(articles)
  const [query, setQuery] = useState("")
  const reset = () => {
    setFiltered(articles)
    setQuery("")
  }

  useEffect(() => {
    const search = query.trim()
    if (!search) {
      reset()
    } else {
      const regex = new RegExp(search, "gi")
      const matches = articles.filter(({ title, text }) =>
        regex.test(title + text),
      )
      matches.length ? setFiltered(matches) : reset()
    }
    // eslint-disable-next-line
  }, [query])

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="Blog">
        <input
          className="Blog__search-input"
          onChange={e => setQuery(e.target.value)}
          placeholder="Search articles..."
          value={query}
        />
        <div className="Blog__preview-container">
          {filtered.map(article => (
            <Preview key={article.slug} article={article} />
          ))}
        </div>
        <div className="Blog__link-container">
          <Link className="Blog__link" to="/">
            Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}
