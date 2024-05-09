import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import HomePage from './home.tsx'
import Nav from './Nav.tsx'

const router = createBrowserRouter([
  {
    path: "/vite-project/",
    element: <App title='defaults' />,
    children: [
      {
        path: "/vite-project/home",
        element: <HomePage />
      },
      {
        path: "/vite-project/about",
        element: <App title='about' />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Nav />
            <Outlet />
          </>
        }>

          <Route index element={<div>Main</div>} />
          <Route path='products' element={<div>Products</div>} />
          <Route path='products/asd/asd' element={<div>asdasd</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
