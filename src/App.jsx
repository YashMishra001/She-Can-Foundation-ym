import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import OurWork from './Pages/OurWork'
import Contact from './Pages/Contact'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      errorElement: <Error />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/owrwork",
          element:<OurWork />
        },
        {
          path:"/contact",
          element:<Contact />
        },
      ]
    }
  ])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
