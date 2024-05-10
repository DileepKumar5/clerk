"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'
import Header from '@/components/Header'


const DashboardLayout = ({ children }: {children: React.ReactNode}) => {

    const {user} = useUser();
  return (
    <div className='h-[100px]'>
        <Header user={user}/>
      {children}
    </div>
  )
}

export default DashboardLayout
