/*-------------------------------------------------------------------
|  React FC Layout
|
|  Purpose:  PROJECT'S MAIN LAYOUT WHICH IS USED INSIDE PAGES FOLDER
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Topbar, Footer, Gear, Categories } from '@components/index'

interface IProps {
  children: React.ReactNode
  hideCategories?: boolean
}

export const Layout: React.FC<IProps> = ({ children, hideCategories }) => {
  return (
    <>
      <Topbar />
      <main id="main">
        {children}
        {!hideCategories && <Categories />}
        <Gear />
      </main>
      <Footer />
    </>
  )
}
