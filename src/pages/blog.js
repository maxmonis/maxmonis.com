import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useArticles from "../hooks/useArticles"
import Preview from "../components/preview"
import { css } from "@emotion/core"

const Blog = () => {
  const articles = useArticles()
  const [order, setOrder] = useState("newest")
  const [filtered, setFiltered] = useState(articles)
  const [query, setQuery] = useState("")
  const reset = () => {
    setFiltered(order === "newest" ? articles : articles.reverse())
    setQuery("")
  }

  useEffect(() => {
    const search = query.trim()
    if (!search) {
      reset()
    } else {
      const regex = new RegExp(search, "gi")
      const res = articles.filter(({ title, text }) =>
        (title + text).match(regex)
      )
      res.length
        ? setFiltered(order === "newest" ? res : res.reverse())
        : reset()
    }
    // eslint-disable-next-line
  }, [query, order])

  return (
    <Layout>
      <SEO title="Blog" />
      <input
        css={css`
          padding: 5px 10px;
          margin: 1rem;
          width: 10rem;
        `}
        placeholder="Search articles..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <label>
        Sort by{" "}
        <select onChange={e => setOrder(e.target.value)}
        css={css`
          padding: 0.5rem;
        `}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </label>
      <div
        css={css`
          max-width: 1200px;
          padding: 2rem 1rem 0;
          @media (min-width: 576px) {
            display: flex;
            flex: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        `}
      >
        {filtered.map(article => (
          <Preview key={article.slug} article={article} />
        ))}
      </div>
      <div
        css={css`
          margin-top: 5rem;
          text-align: center;
          text-transform: uppercase;
          a {
            font-size: 20px;
            :hover {
              border-bottom: 1px solid var(--blue);
            }
          }
        `}
      >
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}

export default Blog
