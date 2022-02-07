import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const About = () => {
  return (
    <div
      css={css`
        max-width: 90%;
        margin-top: 3rem;
        h3 {
          margin: 2rem 0 1rem;
        }
        p {
          margin: 0.5rem 0;
        }
        @media (min-width: 768px) {
          h3 {
            font-size: 1.6rem;
          }
          p {
            font-size: 1.2rem;
          }
        }
      `}
    >
      <h1>About Me</h1>
      <h3>Biography</h3>
      <p>Sports &#10132; Music &#10132; Fitness &#10132; Software</p>
      <h3>Technologies</h3>
      <p>HTML, CSS, JavaScript, TypeScript</p>
      <p>Less, Emotion, Bootstrap, Tailwind</p>
      <p>React, Next, Gatsby, Angular</p>
      <p>Node, Express, Mongoose</p>
      <h3>Contact</h3>
      <p>
        I currently work at{" "}
        <a href={`https://sowingo.com/`}>
          <b>Sowingo</b>
        </a>
        . Feel free to{" "}
        <a href={`mailto:mmonis77@gmail.com`}>
          <b>say hi</b>
        </a>
        .
      </p>
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
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  )
}

export default About
