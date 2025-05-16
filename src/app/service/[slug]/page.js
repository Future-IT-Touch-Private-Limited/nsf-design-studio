import CommonBanner from '@/app/component/CommonBanner'
import ServiceInner from '@/app/component/ServiceInner';
import { serviceData as service } from '@/app/servicedata';
import Link from 'next/link'
import React from 'react'




export const generateStaticParams=()=>{
    return service.map((elm)=>(
        {
            slug:elm.title.toLowerCase().split(" ").join("-")
        }
    ))
}
  
export default function page({params:{slug}}) {
    const singleService=service.find((elm)=>elm.title.toLowerCase().split(" ").join("-")==slug)
  return (
    <div>
       
      <ServiceInner singleService={singleService}/>
    </div>
  )
}
