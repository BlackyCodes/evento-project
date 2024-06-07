import { cn } from '@/lib/utils'
import React from 'react'

export default function Skeloton({className}: {className?: string   }) {
  return (
    <div className={cn('h-4 w-[550px] rounded-md bg-white/5 animate-pulse ',{className})}></div>
  )
}
