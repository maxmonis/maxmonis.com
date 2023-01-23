import "./styles/_footer.scss"
import github from "../images/github.png"
import linkedin from "../images/linkedin.png"
import React from "react"

export default function Footer() {
  return (
    <footer className="Footer">
      <button
        className="Footer__button"
        href="#top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Scroll to top &#8593;
      </button>
      <div className="Footer__link-container">
        <a
          className="Footer__link"
          href="https://github.com/maxmonis"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="Footer__link-image--large"
            src={github}
            alt="Github"
          />
        </a>
        <a
          className="Footer__link"
          href="https://www.linkedin.com/in/max-monis-098ab1192"
          rel="noreferrer"
          target="_blank"
        >
          <img className="Footer__link-image" src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <a
        className="Footer__link"
        href="https://github.com/maxmonis/maxmonis.com"
        rel="noreferrer"
        target="_blank"
      >
        © Max Monis 2020-{new Date().getFullYear()}
      </a>
    </footer>
  )
}
