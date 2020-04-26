import React from 'react'
import Layout from '../components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/head'

const BlogPage = () => {
  const data = useStaticQuery(graphql`query {
    allContentfulBlogPost(sort: {
      fields: datePublished,
      order: DESC
    }) {
      edges {
        node {
          title
          slug
          datePublished(formatString:"MMM Do, YYYY")
        }
      }
    }
  }`)
  return (

    <Layout>
      <Head title="Blog"/>
      brog
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(post => (
          <li key={post.node.title} className={blogStyles.post}>
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{post.node.title}</h2>
              <p>{post.node.datePublished}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>

  )
}
export default BlogPage;
