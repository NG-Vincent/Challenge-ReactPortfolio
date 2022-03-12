function Portfolio(props) {
   return (
      <section id="projects">
         <h2>Projects</h2>
         <a className="project" href="https://safe-cove-20593.herokuapp.com/">
            <h3>Job Tracker</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/jobtracker.jpg")}
               alt="Webpage of a song and lyric search engine."
            />
         </a>

         <a
            className="project"
            href="https://github.com/chamibia/lyrics-finder/"
         >
            <h3>Lyrics Finder</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/artistlyrics.jpg")}
               alt="Webpage of a song and lyric search engine."
            />
         </a>

         <a className="project" href="https://ng-vincent.github.io/run-buddy/">
            <h3>Run Buddy</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/runbuddy.jpg")}
               alt="A runner tying their shoes and getting ready to go for a jog."
            />
         </a>

         <a
            className="project"
            href="https://intense-springs-39510.herokuapp.com/"
         >
            <h3>Note Taker</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/notetaker.jpg")}
               alt="Webpage for a note taking app."
            />
         </a>

         <a
            className="project"
            href="https://sleepy-brook-70860.herokuapp.com/"
         >
            <h3>Tech Blog</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/techblog.jpg")}
               alt="Webpage for a tech blog app."
            />
         </a>

         <a
            className="project"
            href="https://ancient-beyond-15125.herokuapp.com/"
         >
            <h3>Budget Tracker</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/budgettracker.jpg")}
               alt="Webpage for a budget tracker app."
            />
         </a>
      </section>
   );
}

export default Portfolio;
