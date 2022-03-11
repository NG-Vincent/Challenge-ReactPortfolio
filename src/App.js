import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
   // variables used for components conditional rendering
   const [navlinks] = useState(["About", "Portfolio", "Contact", "Resume"]);
   const [currentNav, setCurrentNav] = useState(navlinks[0]);

   return (
      <div>
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
         </main>
         <Footer />
      </div>
   );
}

export default App;
