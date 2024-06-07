import Loading from "@/app/event/[slug]/Loading";
import EventsList from "@/components/EventsList";
import H1 from "@/components/h1";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import z from 'zod'
import React, { Suspense } from "react";
type Props = {
  params: {
    city: string;
  };
 
};

export function generateMetadata({ params }: Props):Metadata{
  const city = params.city;

  return {
   title: city === 'all' ? 'All Events':  `Events in ${capitalize(city)}`,
  }
}
type  eventPageParams = Props &  {
searchParams: {[key: string]: string | string [] | undefined }
}



const pageNumberSchema = z.coerce.number().int().positive().optional()

export default  async function  EventPage({ params,searchParams}: eventPageParams) {
  const city = params.city;
 const parsedPage = pageNumberSchema.safeParse(searchParams.page)
 if(!parsedPage.success){
   throw new Error('Invalid page number')
   }



  
 
  return (
    <main className="flex  flex-col items-center py-24 px-[20px] min-h-[110vh] ">
      <H1 className='mb-28'>
        {city === 'all' && "All Events"}
        {city !== 'all' && `Events in ${capitalize(city)}`
        
        
        }
      </H1>
     <Suspense key={city + parsedPage.data} fallback={<Loading/>}>
     <EventsList city={city} page={parsedPage.data}  />

     </Suspense>
      

      
   


    
    </main>
  );
}
