import Skeloton from '@/components/skeleton'


export default function Loading() {
  return (
    <div className='flex flex-col items-center gap-y-4 pt-28'>
        <Skeloton className='h-4 w-[550px]'/>
        <Skeloton className='h-4 w-[400px]'/>
        <Skeloton className='h-4 w-[430px]'/>
        
        </div>
  )
}
