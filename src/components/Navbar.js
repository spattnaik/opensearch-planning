import { Link } from 'gatsby'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfoQuery {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <nav>
      <h2>{ title }</h2>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/daily">Daily Status</Link>
        <Link to="/weekly">Weekly Status</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
