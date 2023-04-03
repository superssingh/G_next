import React, { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Footer, Navbar } from '../components'
import { getPosts } from '../services/getBlogData'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ globally default to 20 seconds
      staleTime: 1000 * 60 * 50,
    },
  },
})

queryClient.prefetchQuery({
  queryKey: ['posts'],
  queryFn: getPosts,
})

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <div className="containerBox min-w-screen flex min-h-screen flex-col ">
          <Navbar />
          <div className="pt-24">{children}</div>
          <Footer />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default Layout