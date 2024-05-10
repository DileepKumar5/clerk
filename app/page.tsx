import { Button } from '@/components/ui/button'
import Link from 'next/link'


import React from 'react'

const page = () => {
  return (

    <div>
      <div className='flex flex-col h-screen w-full items-center justify-center'>
      <h1 className='text-5xl'>
        Home
      </h1>
      <Button asChild>
        <Link href='/dashboard'>
       
        Go to DashBoard
        </Link>
        </Button>
    </div>
    </div>
  )
}

export default page
