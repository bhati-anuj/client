import React from 'react'
import MainPage from './MainPage'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import axios from 'axios'



// async  function fetchData() {
        
//   const cookieStore = cookies()
//   const authToken= cookieStore.get('authToken');

//   if(!authToken){
//    redirect('/')
//   }
 
//   const response=await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/api/v1/users/admin`,{},{headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${authToken.value}`,
//   }},).catch(err=>console.log('unauthorized acess attempted'))
 
//   if(!response)return undefined
//   return response.data.message


// }

const page = async () => {

// const authorized=await fetchData(params)

//  if(!authorized){
//   redirect('/')
//  }
  
 
  return (
    <>
    <MainPage/>
    </>
  )
}

export default page

