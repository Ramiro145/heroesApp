import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from '../auth'
import { childHeroesRoutes, HeroesRoutes } from '../heroes'
import { ErrorPage } from './ErrorPage'



const router = createBrowserRouter([
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/',
        element: <HeroesRoutes/>,
        errorElement: <ErrorPage/>,
        children:childHeroesRoutes
    }
])

export const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}
