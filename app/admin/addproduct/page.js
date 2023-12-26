import AdminHeader from '@/app/AdminComponents/AdminHeader'
import Sidebar from '@/app/AdminComponents/Sidebar'
import React from 'react'
import AddProductForm from './AddProductForm'

const page = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-900">
    <AdminHeader/>
    <Sidebar/>
    <AddProductForm/>
    </div>
  )
}

export default page