import * as React from 'react'
import { graphql, Link as GatsbyLink } from 'gatsby'
import { Box, Heading, Link, Image, Card, Text, Divider } from 'theme-ui'
import SEO from 'react-seo-component'

import { useSiteMetadata } from '../hooks/use-site-metadata'

// import { Layout } from "../components/layout";

export default function IndexPage({ data }) {
  const {
    title,
    description,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  return (
    <>
      <SEO
        title={`Home`}
        titleTemplate={title}
        description={description}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <Card sx={{ maxWidth: 256 }} variant="styles.card.primary">
        <Text>I am an Entrepreneur, UX Designer & Dreamer</Text>
      </Card>
      <Divider />
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
        <Box
          key={id}
          as="article"
          sx={{
            mb: 4,
            p: 3,
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
            border: '1px solid #d1d1d1',
            borderRadius: '15px',
            width: '50%',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1622730000579-e6bde344d6a4?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfF84ekZIdWhSaHlvfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="New Post"
            style={{ width: '100%', height: '10rem' }}
          />
          <Link as={GatsbyLink} to={`/${slug}`}>
            <Heading>{frontmatter.title}</Heading>
            <Box as="p" variant="styles.p">
              {frontmatter.date}
            </Box>
            <Box as="p" variant="styles.p">
              {excerpt}
            </Box>
          </Link>
        </Box>
      ))}
    </>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        slug
      }
    }
  }
`
