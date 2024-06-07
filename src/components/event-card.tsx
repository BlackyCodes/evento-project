'use client'
import { EventoEvent } from '@prisma/client'
import { motion, useScroll, useTransform } from 'framer-motion'


import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
type EventCardProps = {
  event:EventoEvent
}

const MotionLink = motion(Link)


export default function EventCard({event}:EventCardProps) {
 const ref =  useRef(null)
 const { scrollYProgress}  = useScroll({
  target: ref,
   offset: ['0 1', '1.5 1'],


 })

 const scaleProgres = useTransform(scrollYProgress, [0, 1], [0.8, 1])
 const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  return (
    <MotionLink 
    ref={ref}
    href={`/event/${event.slug}`}
     className='flex-1 basis-80 h-[300px] max-w-[500px'
     style={{
      //@ts-ignore
      scale: scaleProgres,
        //@ts-ignore
      opacity: opacityProgress
    
    
    }}

    initial={{scale: 0.8, opacity: 0}}
     
     > 
    <section className=' flex flex-col ] bgwhite/[3%] w-full h-full rounded-xl overflow-hidden relative state-effects'>
        <Image src={event.imageUrl} alt={event.name} width={500} height={280} className='h-[60%] object-cover' />

        <div className='flex flex-col justify-center items-center flex-1'>
            <h2 className='text-2xl font-bold'>{event.name}</h2>
            <p className='italic textwhite/75'>{event.organizerName}</p>
            <p className='text-sm text-white/50 mt-4'>{event.location}</p>

        </div>
        <section className=' flex justify-center flex-col items-center absolute left-[12px] top-[12px] h-[45px] w-[45px] rounded-md'>
          <p className='textxl font-bold -mb-[5px]'>
          
            
          
            {
              new Date(event.date).toLocaleString('en-US', {day: '2-digit'})


           
            }
            
            </p>
            <p className='text-xs uppercase text-accent'>{
              new Date(event.date).toLocaleString('en-US', {month: 'short'})
            }</p>
            
        </section>


    </section>
    </MotionLink>
  )
}
