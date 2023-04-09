import "./styles/_website.scss"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

export default function Website({
  website: { fluid, github, text, title, url },
}) {
  return (
    <div className="Website">
      <div className="Website__title-container">
        <a target="_blank" rel="noreferrer" href={url}>
          <h3 className="Website__title">{title}</h3>
        </a>
      </div>
      <div className="Website__content">
        <div className="Website__image-container">
          <Image fluid={fluid} />
        </div>
        <div className="Website__information">
          <p
            className="Website__description"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
          {github && (
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
          )}
        </div>
      </div>
    </div>
  )
}

Website.propTypes = {
  website: PropTypes.object.isRequired,
}
