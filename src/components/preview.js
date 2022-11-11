import "./styles/_preview.scss"
import { Link } from "gatsby"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const Preview = ({ article }) => {
  const { title, blurb, slug, image, published } = article
  return (
    <div className="Preview">
      <Link to={`../blog/${slug}`}>
        <h5 className="Preview__title">{title}</h5>
        <div>
          <div className="Preview__image-container">
            <Image className="Preview__image" fluid={image.fluid} />
          </div>
          <p className="Preview__text">{blurb}</p>
          <p className="Preview__text">
            Published {formatDistanceToNow(new Date(published))} ago
          </p>
        </div>
      </Link>
    </div>
  )
}

Preview.propTypes = {
  article: PropTypes.object.isRequired,
}

export default Preview
