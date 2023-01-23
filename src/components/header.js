import "./styles/_header.scss"
import { Link } from "gatsby"
import icon from "../images/favicon.png"
import PropTypes from "prop-types"
import React from "react"

export default function Header({ title }) {
  return (
    <header className="Header">
      <Link className="Header__link" to="/">
        <img className="Header__image" src={icon} alt={title} />
      </Link>
      <div className="Header__link-container">
        <Link className="Header__link" to="/blog">
          Blog
        </Link>
        <a className="Header__link--outlined" href="mailto:mmonis77@gmail.com">
          Get in Touch
        </a>
      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: "Max Monis",
}
