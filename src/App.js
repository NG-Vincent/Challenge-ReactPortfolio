import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
   // variables used for components conditional rendering
   const [navlinks] = useState(["About", "Portfolio", "Contact", "Resume"]);
   const [currentNav, setCurrentNav] = useState(navlinks[0]);

   return (
      <>
         {/* props for conditional rendering */}
         <Nav
            navlinks={navlinks}
            currentNav={currentNav}
            setCurrentNav={setCurrentNav}
         />
         <main>
            {/* components render conditionally */}
            {currentNav === "About" && <About />}
            {currentNav === "Portfolio" && <Portfolio />}
            {currentNav === "Contact" && <Contact />}
            {currentNav === "Resume" && <Resume />}
         </main>
         <div className="filler-space"></div>
         <Footer />
      </>
   );
}

export default App;
