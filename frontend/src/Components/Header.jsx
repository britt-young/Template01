import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logos/sample-logo.svg";

// Initialization for ES Users
import { Collapse, Ripple, initTWE } from "tw-elements";
initTWE({ Collapse, Ripple });

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  };
  return (
    <div>
      <header>
        {/* Hero section with background image, heading, subheading and button */}
        <div className="relative h-[600px] overflow-hidden bg-[url(https://plus.unsplash.com/premium_photo-1661854717339-04b1b5a89b12?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-[50%] bg-no-repeat">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/0 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <img src={logo} alt="Logo" className="w-80 h-80 mx-auto" />
                {/* <h1 className="mb-6 text-5xl font-bold"></h1> */}
                <h3 className="mb-8 text-3xl font-bold">Making farm foods accessible to the community</h3>
                <button
                  type="button"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                  data-twe-ripple-init=""
                  data-twe-ripple-color="light"
                  onClick={handleClick}
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
