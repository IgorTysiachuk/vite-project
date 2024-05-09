import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Nav from './Nav.tsx'


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
          <Route path='products/asd/asd' element={<div>asdassd</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
