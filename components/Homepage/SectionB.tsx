import React from 'react'
import CardA from '../ui/cards/cardA'


const SectionB = () => {
  return (
    <div className='grid md:grid-cols-3 gap-3 py-14 md:px-20 px-8 bg-[#f5f5ee]'>
           <CardA
        title="YC Top Companies List by Revenue"
        description="Congratulations to the companies recognized on the inaugural YC Top Companies List by Revenue!"
        link=""
        linkText=""
      />
           <CardA
        title="YC Library"
        description="Explore some of the best YC videos, podcasts, and essays from over the years. Come learn how to make something people want"
        link=""
        linkText=""
      />
           <CardA
        title="The Standard Deal"
        description="When a company is accepted into the YC batch program, we invest a total of $500,000.
        !"
        link=""
        linkText=""
      />
    </div>


  )
}

export default SectionB