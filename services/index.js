import { request, gql } from "graphql-request";

export const getPosts = async () => {
  const graphAPI = process.env.GRAPH_PUBLIC_ENDPOINT;

  const query = gql`
    query Blogs {
      postsConnection {
        edges {
          node {
            author {
              id
              name
              bio
              photo {
                url
              }
            }
            id
            title
            excerpt
            slug
            tags
            featured_image {
              url
            }
            description
            categories {
              id
              name
            }
            createdAt
          }
        }
      }
    }
  `;

  const results = await request(graphAPI, query);
  return results.postsConnection.edges;
};
