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
            <ul>
               {/* iterate through all navlinks, create element for each*/}
               {navlinks.map((navlink) => (
                  <li
                     // key for react mapping
                     key={navlink.name}
                     // click handler. pass state up to App.js
                     onClick={() => {
                        setCurrentNav(navlink);
                     }}
                  >
                     {/* text content */}
                     {navlink}
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}

export default Nav;
