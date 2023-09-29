// Example GraphQL query in a Gatsby component
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const MyComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            excerpt
          }
        }
      }
    }
  `)

  // Use the data in your component
  // ...

  return <div>Your component content here</div>
}

export default MyComponent
