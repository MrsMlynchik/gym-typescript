import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import type { SelectedPage } from "@/types/SelectedPage";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/types/ActionButton";
import "@/index.css";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow" ;


  return (
    <nav>
        <div className={`${flexBetween} ${navbarBackground} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    <img src={Logo} alt="logo" />

                    {/* Right side */}
                    {isAboveMediaScreens ? (
                      <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                          <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                          <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                          <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                          <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                          <p>Sign In</p>
                          <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="rounded-full bg-secondary-500 p-2" 
                        onClick={() => setIsMenuToggled(!isMenuToggled)} 
                      >
                        <Bars3Icon className="h-6 w-6 text-white" />
                      </button>  
                    )}
                </div>
            </div>
        </div>

        {/* Mobile Menu Modal */}
        {!isAboveMediaScreens && isMenuToggled && (
          <div className="fixed top-0 bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
              {/* Close Icon */}
              <div className="flex justify-end p-12">
                  <button onClick={() => setIsMenuToggled(false)}>
                      <XMarkIcon className="h-6 w-6 text-gray-400" />
                  </button>
              </div>
              {/* Menu Items */}
              <div className="ml-6 flex flex-col gap-10 text-2xl">
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Our Classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contact Us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
          </div>
        )}
    </nav>
  )
}

export default Navbar
