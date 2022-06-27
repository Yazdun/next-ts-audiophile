/*-------------------------------------------------------------------
|  React FC Layout
|
|  Purpose:  PROJECT'S MAIN LAYOUT WHICH IS USED INSIDE PAGES FOLDER
|
|  Returns:  TSX
*-------------------------------------------------------------------*/

import React from 'react'
import { Topbar } from '@components/index'

interface IProps {
  children: React.ReactNode
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      <main id="main">{children}</main>
    </>
  )
}
