import React from 'react'
import Skeloton from './skeleton'

export default function SkelotonCard() {
  return (
    <div className='space-y-4'>

        <Skeloton className='h-12 w-12 rounded-full'/>
        <Skeloton className=' h-4 w-[250px]'/>
        <Skeloton className='h-4 w-[200px]'/>
    </div>
  )
}
