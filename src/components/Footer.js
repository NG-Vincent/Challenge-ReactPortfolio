function Footer(props) {
   return (
      <footer>
         <h4>
            Made with pride by <span className="signature">Vincent Nguyen</span>
         </h4>
         <p>&copy; 2022</p>
         <ul>
            <li>
               Github:{" "}
               <a
                  href="https://github.com/NG-Vincent"
                  target="_blank"
                  rel="noreferrer"
               >
                  NG-Vincent
               </a>
            </li>
            <li>
               LinkedIn:{" "}
               <a
                  href="https://www.linkedin.com/in/vincent-nguyen-4994bb221/"
                  target="_blank"
                  rel="noreferrer"
               >
                  LinkedIn
               </a>
            </li>
            <li>
               Stack Overflow:{" "}
               <a
                  href="https://stackoverflow.com/users/17004843"
                  target="_blank"
                  rel="noreferrer"
               >
                  Stack Overflow
               </a>
            </li>
         </ul>
      </footer>
   );
}

export default Footer;
