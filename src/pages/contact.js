import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me</h1>
      <h2>email: cmax1018@gmail.com</h2>
      <h2>
        github:
        <a
          href="https://github.com/cmax1018"
          target="_blank"
          rel="noopener noreferrer"
        >
          cmax1018
        </a>
      </h2>
    </Layout>
  )
}
export default ContactPage
