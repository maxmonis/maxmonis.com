import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import icon from "../images/favicon.png"

const Container = styled.header`
  width: 100%;
  display: flex;
  flex: row;
  a {
    margin: 1rem 0 0 5%;
  }
  span {
    padding: 2rem 5%;
    margin: 0 0 0 auto;
    a {
      margin: 1rem 1rem 0;
      &.email {
        margin: 0;
        padding: 0.5rem;
        border: solid 2px var(--blue);
        border-radius: 8px;
        max-width: 200px;
      }
    }
  }
`
const Image = styled.img`
  height: 50px;
`

const Header = ({ title }) => {
  return (
    <Container>
      <Link to="/">
        <Image src={icon} alt={title} />
      </Link>
      <span>
        <Link to="/blog">Blog</Link>
        <a href={`mailto:mmonis77@gmail.com`} className="email">
          Get In Touch
        </a>
      </span>
    </Container>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: `Max Monis`,
}

export default Header
