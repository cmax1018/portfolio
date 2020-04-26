import React from 'react'
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
  `)
  console.log(data);
  return (
    <Layout>
      brog
      <ol>
        {data.allMarkdownRemark.edges.map(post => (
          <li key={post.node.frontmatter.title}>
            <h2>title: {post.node.frontmatter.title}</h2>
            <p>{post.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>

  )
}
export default BlogPage;
