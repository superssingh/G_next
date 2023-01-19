import React from "react"
import dynamic from "next/dynamic"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Footer } from '../components/';

const Navbar = dynamic(() => import('../components/jsx/Navbar'), {
  ssr: false,
});

const queryClient = new QueryClient();

const Layout = ({ children }) => {
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
  );
};

export default Layout
