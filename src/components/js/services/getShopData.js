import { request, gql } from "graphql-request";
const graphAPI = process.env.GRAPH_PUBLIC_ENDPOINT;
export const getProducts = async () => {
  const query = gql`
    // ****
  `;

  const results = await request(graphAPI, query);
  return results.products;
};

export const getProductDetail = async (slug) => {
  const query = gql`
    query getProduct($slug: String!) {
      product(where: { slug: $slug }) {
        // *****
      }
    }
  `;

  const results = await request(graphAPI, query, { slug });
  return results.product;
};
