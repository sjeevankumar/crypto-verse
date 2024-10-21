import React from "react"
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Homepage,
  Navbar,
  News,
} from "./components"
import "./App.css"
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom"
import { Space, Typography } from "antd"

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Outlet />
          <div className="footer">
            <Typography.Title level={5} style={{ color: "white" }}>
              Cryptoverse <br />
              All rights deserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/cryptocurrencies",
          element: <Cryptocurrencies />,
        },
        {
          path: "/crypto/:coinId",
          element: <CryptoDetails />,
        },
        {
          path: "/news",
          element: <News />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
