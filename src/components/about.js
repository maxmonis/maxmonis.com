import "./styles/_about.scss"
import { Link } from "gatsby"
import React from "react"
import photo from "../images/max.jpg"

export default function About() {
  return (
    <div className="About">
      <h2 className="About__title">About Me</h2>
      <div className="About__content">
        <div className="About__image-container">
          <img className="About__image" src={photo} alt={"Max Monis"} />
          <p className="About__image-caption">Not really Tom Hardy (sorry)</p>
        </div>
        <div className="About__info">
          <h6 className="About__subtitle">Biography</h6>
          <p className="About__text">
            Sports &#10132; Music &#10132; Fitness &#10132; Software
          </p>
          <h6 className="About__subtitle">Technologies</h6>
          <p className="About__text">HTML, CSS, JavaScript, TypeScript</p>
          <p className="About__text">React, Next, Gatsby, Angular</p>
          <p className="About__text">Sass, Less, Tailwind, MUI</p>
          <p className="About__text">Jest, Jasmine, Cypress, Playwright</p>
          <h6 className="About__subtitle">Contact</h6>
          <p className="About__text">
            I currently work at{" "}
            <a
              className="About__text-link"
              href={`https://sowingo.com/about`}
              rel="noreferrer"
              target="_blank"
            >
              Sowingo
            </a>
            . Feel free to{" "}
            <a className="About__text-link" href="mailto:mmonis77@gmail.com">
              say hi
            </a>
            .
          </p>
        </div>
      </div>
      <div className="About__link-container">
        <Link className="About__link" to="/blog">
          Blog
        </Link>
      </div>
    </div>
  )
}
