import React, { useEffect } from "react";

function Footer(props) {
   return (
      <footer>
         <h4>
            Made with pride by <span class="signature">Vincent Nguyen</span>
         </h4>
         <p>&copy; 2022</p>
         <ul>
            <li>
               <a href="#">Github</a>
            </li>
            <li>
               <a href="#">LinkedIn</a>
            </li>
            <li>
               <a href="#">Twitter</a>
            </li>
         </ul>
      </footer>
   );
}

export default Footer;
