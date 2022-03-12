import React, { useEffect } from "react";

function Nav(props) {
   const { navlinks, currentNav, setCurrentNav } = props;

   // set window title to the current nav link
   useEffect(() => {
      document.title = currentNav;
   }, [currentNav]);

   return (
      <header>
         <h1>Vincent Nguyen</h1>
         <nav>
            {/* iterate through all navlinks, create element for each*/}
            {navlinks.map((navlink) => (
               <span
                  // key for react mapping
                  key={navlink}
                  // class for text highlight when currently selected nav
                  className={currentNav === navlink ? "current-nav" : undefined}
                  // click handler. pass state up to App.js
                  onClick={() => {
                     setCurrentNav(navlink);
                  }}
               >
                  {/* text content */}
                  {navlink}
               </span>
            ))}
         </nav>
      </header>
   );
}

export default Nav;
