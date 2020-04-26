import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const notFound = () => {
  return (
    <Layout>
      <Head title="404!" />
      <h1>404'd!</h1>
      <p><Link to='/'>Get outta here!</Link></p>
    </Layout>
  )
}

export default notFound;
