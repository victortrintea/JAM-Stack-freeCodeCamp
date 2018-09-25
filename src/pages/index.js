import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>This is another line of text create by me</p>
    

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
