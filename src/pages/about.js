import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout'

const AboutPage = () => {
  return (
  <Layout>
    <h1>About Me</h1>
    <h2>Max Van Buskirk</h2>
    <p1>I am ~the guy~</p1>
    <p>Need me? <Link to="/contact">Contact me.</Link></p>
  </Layout>
  )
}
export default AboutPage;