import SkelotonCard from "@/components/skeleton-card";


export default function loading() {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-[20px] py-24">
    {
      Array.from({length: 6}).map((_,i)=>(
        <SkelotonCard key={i}/>
      ))
    }
      </div>
  )
}
