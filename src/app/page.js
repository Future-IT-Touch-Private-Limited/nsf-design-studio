import React from "react";
import SliderHeader from "./component/Header";
import About from "./component/About";
import WarrantySection from "./component/Chooseus";
import PortfolioSection from "./component/Portfolio";
import OurServices from "./component/Service";
import LatestPostsSection from "./component/Blog";
import Testmonails from "./component/Testmonails";

const page = () => {
  return (
    <>
      <SliderHeader />
      <About />
     <OurServices />
       <WarrantySection />
         <PortfolioSection />
     <LatestPostsSection />
          <Testmonails/>
     
    </>
  );
};

export default page;
