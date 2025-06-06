import React from 'react'
import PortfolioInner from '../component/PortfolioInner';


export const metadata = {
  title: "Portfolio | NSF Design Studio",
  description: "Explore the creative portfolio of NSF Design Studio – a showcase of our design projects, innovative solutions, and visual storytelling excellence.",
};


export default function page() {
  return (
    <div>
      <PortfolioInner/>
    </div>
  )
}
