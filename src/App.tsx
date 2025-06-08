import { useEffect, useState } from "react";
import Navbar from "@/scenes/navbar/index";
import Home from "@/scenes/home/index";
import Benefits from "@/scenes/benefits/index";
import OurClasses from "@/scenes/ourclasses/index";
import ContactUs from "./scenes/contactus/ContactUs";
import Footer from "@/scenes/footer/Footer"
import type { SelectedPage } from "@/types/SelectedPage";



function App() {
const [selectedPage, setSelectedPage] = useState<SelectedPage>("home");
const [isTopOfPage, setIsTopOfPage] =useState<boolean>(true);

 useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll Y:", window.scrollY);
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
    <div className="app bg-gray20 text-black ">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer/>
    </div>
    </>
  )
}

export default App
