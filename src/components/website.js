import "./styles/_website.scss"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

export default function Website({ website }) {
  const { title, text, url, image, github } = website
  return (
    <div className="Website">
      <a target="_blank" rel="noreferrer" href={url}>
        <h3 className="Website__title">{title}</h3>
      </a>
      <div className="Website__content">
        <a target="_blank" rel="noreferrer" href={url}>
          <div className="Website__image-container">
            <Image fluid={image.fluid} />
          </div>
        </a>
        <div className="Website__information">
          <p className="Website__description">{text}</p>
          <div className="Website__link-container">
            <a
              className="Website__link"
              href={github}
              rel="noreferrer"
              target="_blank"
            >
              View code on Github &#10132;
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Website.propTypes = {
  website: PropTypes.object.isRequired,
}
