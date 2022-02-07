import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const Website = ({ website }) => {
  const { title, text, url, image, github } = website
  return (
    <div
      css={css`
        background-color: white;
        display: inline-block;
        justify-content: center;
        margin-bottom: 2rem;
        padding: 1rem 1rem 3rem;
        h1,
        p {
          color: $var(--blue);
        }
        h1 {
          margin: 1rem 0;
          @media (min-width: 576px) {
            font-size: 3rem;
          }
        }
      `}
    >
      <a target="_blank" rel="noreferrer" href={url}>
        <h1>{title}</h1>
      </a>
      <div
        css={css`
          max-width: 1025px;
          @media (min-width: 992px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 1rem;
          }
          @media (min-width: 992px) {
            padding-left: 1rem;
            display: grid;
            grid-template-columns: 2fr 1fr;
          }
        `}
      >
        <a target="_blank" rel="noreferrer" href={url}>
          <div
            css={css`
              border: 2px solid var(--blue);
            `}
          >
            <Image fluid={image.fluid} />
          </div>
        </a>
        <div
          css={css`
            a {
              max-width: 275px;
              color: var(--blue);
              padding: 1rem 2rem;
              border: 2px solid var(--blue);
            }
            p {
              margin: 1.5rem 0 3rem;
              padding: 0 1rem;
              text-align: left;
            }
            @media (min-width: 768px) {
              font-size: 20px;
            }
            @media (min-width: 992px) {
              position: relative;
              margin-top: 2rem;
              p {
                margin: 0;
                padding: 0 2rem 0 1rem;
              }
              div {
                position: absolute;
                bottom: 2rem;
                width: 100%;
              }
            }
          `}
        >
          <p>{text}</p>
          <div>
            <a target="_blank" rel="noreferrer" href={github}>
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

export default Website
