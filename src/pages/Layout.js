import React from "react"
import dynamic from "next/dynamic"

const Navbar = dynamic(() => import("../components/jsx/Navbar"), {
  ssr: false,
})

const Layout = ({ children }) => {
  return (
    <React.StrictMode>
      <div className="containerBox flex flex-col min-w-screen min-h-screen ">
        <Navbar />
        <div className="pt-24">{children}</div>
      </div>
    </React.StrictMode>
  )
}

export default Layout
