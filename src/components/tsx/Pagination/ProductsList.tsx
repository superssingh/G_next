import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Product {
  title: string
  imageUrl: string
  price: number
  discount: number
  description: string
}

interface ProductsResponse {
  pages: Product[][]
}

const fetchProducts = async (
  _: unknown,
  page: number,
  perPage: number
): Promise<ProductsResponse> => {
  try {
    const response = await axios.get<ProductsResponse>(
      `/api/products?page=${page}&perPage=${perPage}`
    )
    return response.data
  } catch (error) {
    throw new Error('Error fetching products')
  }
}

const ProductList: React.FC = () => {
  const { data, isLoading, isError, isFetching, fetchNextPage, hasNextPage } =
    useQuery<ProductsResponse>(
      'products',
      ({ pageParam = 1 }) => fetchProducts(null, pageParam, 10),
      {
        getNextPageParam: (lastPage) =>
          lastPage.length > 0 ? lastPage.length + 1 : undefined,
        keepPreviousData: true,
      }
    )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching products</div>
  }

  return (
    <div>
      {data?.pages.flatMap((page) =>
        page.map((product) => (
          <div key={product.title}>
            <h3>{product.title}</h3>
            <img
              src={product.imageUrl}
              alt={product.title}
            />
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discount * 100}%</p>
            <p>{product.description}</p>
          </div>
        ))
      )}
      {isFetching && <div>Loading more...</div>}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetching}
        >
          Load More
        </button>
      )}
    </div>
  )
}

export default ProductList
