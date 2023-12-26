import React from 'react'
import AdminHeader from '../AdminComponents/AdminHeader'
import Sidebar from '../AdminComponents/Sidebar'
import LandingPage from '../AdminComponents/LandingPage'

const MainPage = () => {
  return (
   <div className="bg-gray-50 dark:bg-slate-900">
   <AdminHeader/>
   <Sidebar/>
   <LandingPage/>
   </div>
  )
}

export default MainPage