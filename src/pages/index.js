import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout';
import Head from '../components/head';

const MainPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>wazzup</h1>
      <h2>yoyoyo</h2>
      <p>Need me? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default MainPage
