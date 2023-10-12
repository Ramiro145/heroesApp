import React from 'react'
import { Outlet } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import {Navbar} from './ui/components'


export const HeroesApp = () => {
  return (
    <>
        <AppRouter/>
    </>
  )
}
