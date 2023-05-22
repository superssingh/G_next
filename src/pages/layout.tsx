import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Footer, Navbar } from '../components'
import { getPosts } from '../components/js/services/getBlogData'

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
const Layout = ({ children }: LayoutProps) => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <div className="containerBox min-w-screen flex min-h-screen flex-col caret-transparent ">
          <Navbar />
          <div className="pt-10">{children}</div>
          <Footer />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default Layout
