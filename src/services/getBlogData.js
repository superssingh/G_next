import { request, gql } from "graphql-request";
const graphAPI = process.env.GRAPH_PUBLIC_ENDPOINT;
export const getPosts = async () => {
  const query = gql`
    query getPosts {
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
            description
            content {
              json
              html
              markdown
              text
            }
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

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        id
        name
      }
    }
  `;

  const results = await request(graphAPI, query);
  return results.categories;
};

export const getPostDetail = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      post(where: { slug: $slug }) {
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
        description
        content {
          json
          html
          markdown
          text
        }
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
  `;

  const results = await request(graphAPI, query, { slug });
  return results.post;
};

export const getPostsByCategory = async (category) => {
  const query = gql`
    query getPost($category: String!) {
      posts(where: { slug: $category }) {
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
        description
        content {
          json
          html
          markdown
          text
        }
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
  `;

  const results = await request(graphAPI, query, { category });
  return results.posts;
};
