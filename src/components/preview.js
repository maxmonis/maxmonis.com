import "./styles/_preview.scss"
import { Link } from "gatsby"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

export default function Preview({
  article: { blurb, fluid, minRead, published, slug, title },
}) {
  return (
    <div className="Preview">
      <Link to={`../blog/${slug}`}>
        <div className="Preview__content">
          <h5 className="Preview__title">{title}</h5>
          <div className="Preview__image-container">
            <Image className="Preview__image" fluid={fluid} />
          </div>
          <div className="Preview__text-container">
            <p className="Preview__text">{blurb}</p>
            <p className="Preview__text">{minRead} minute read</p>
            <p className="Preview__text">
              Published {formatDistanceToNow(new Date(published))} ago
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}

Preview.propTypes = {
  article: PropTypes.object.isRequired,
}
