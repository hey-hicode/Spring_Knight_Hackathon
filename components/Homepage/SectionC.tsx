import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const SectionC = () => {
  return (
    <div className=' py-11 md:px-20  flex flex-col gap-7 md:gap-11 '>
        <h1 className=' font-bold text-[26px] flex-col md:text-5xl  mx-auto flex justify-center items-center   '>How We Help</h1>

        <div>
        <Tabs defaultValue="account" className="">
  <TabsList className='flex md:justify-center md:items-center md:pb-6 '>
    <TabsTrigger className='px-7 py-5 bg-blue-400 text-white text-lg' value="account">For Investors</TabsTrigger>
    <TabsTrigger className='px-7 py-5 bg-blue-400 text-white text-lg' value="password">For Startups</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <div className="grid grid-cols-1   md:px-20 px-8 gap-6 lg:grid-cols-2 lg:gap-8">
  <div className=" flex justify-center  gap-6 items-start md:items-center flex-col md:px-8 py-6 "> 
  <h1 className='md:text-3xl text-2xl font-bold'>Empowering Innovation</h1>
  <h2 className='md:text-lg md:text-center'>At [Our Name], we provide startups with the tools and opportunities to transform visionary ideas into market-leading enterprises. Here, you'll connect with forward-thinking investors ready to bet on your potential. </h2>

  </div>
  <div className=" ">
    <img 
    src='https://media.gettyimages.com/id/1425190099/photo/business-people-having-hybrid-meeting-in-office.jpg?s=612x612&w=0&k=20&c=2QtlIki6g-73Ta1RJ415YCCFCXGGscgLvEA24UkGlOk='
    />
  </div>
</div>
</TabsContent>
  <TabsContent value="password">
  <div className="grid grid-cols-1   md:px-20 px-8 gap-6 lg:grid-cols-2 lg:gap-8">

  <div className=" flex justify-center  gap-6  items-center flex-col md:px-8 py-6 "> 
  <h1 className='md:text-3xl text-2xl font-bold'>Strategic Investment Opportunities</h1>
  <h2 className='md:text-lg md:text-center'>[Your Platform Name] is your gateway to the next big success story. Our platform curates high-potential startups, providing a pipeline of opportunities that align with your investment thesis</h2>

  </div>
  <div className=" ">
    <img 
    src='https://media.gettyimages.com/id/1063752094/photo/financial-advisior-having-a-meeting-with-couple.jpg?s=612x612&w=0&k=20&c=PwIX9dKwhvVK7eiiMzFh2q7ZNscEW3niUPBrBTX7NWY='
    />
  </div>
</div>
  </TabsContent>
</Tabs>

        </div>
    </div>
  )
}

export default SectionC
