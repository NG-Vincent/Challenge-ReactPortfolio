function Footer(props) {
   return (
      <footer>
         <h1>
            Made with pride by <span className="signature">Vincent Nguyen</span>
         </h1>
         <div className="links-wrapper">
            Check me out on:{" "}
            <a
               href="https://github.com/NG-Vincent"
               target="_blank"
               rel="noreferrer"
            >
               GitHub
            </a>
            {" / "}
            <a
               href="https://www.linkedin.com/in/vincent-nguyen-4994bb221/"
               target="_blank"
               rel="noreferrer"
            >
               LinkedIn
            </a>
            {" / "}
            <a
               href="https://stackoverflow.com/users/17004843"
               target="_blank"
               rel="noreferrer"
            >
               Stack Overflow
            </a>
         </div>
      </footer>
   );
}

export default Footer;
