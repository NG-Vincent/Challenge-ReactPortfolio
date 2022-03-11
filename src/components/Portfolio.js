function Portfolio(props) {
   return (
      <section id="projects">
         {/* full width */}
         <h2>Projects</h2>
         {/* elements stack vertically at smaller screens */}
         {/* first, primary project */}
         <a className="project" href="https://safe-cove-20593.herokuapp.com/">
            <h3>Job Tracker</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/jobtracker.jpg")}
               alt="Webpage of a song and lyric search engine."
            />
         </a>
         {/* remaining projects, flexing */}
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
         <a className="project" href="./placeholder.html">
            <h3>Plant Museum</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/museum.jpg")}
               alt="The main lobby of a multi-floor museum featuring many lights, overpasses, and massive planters on the walls."
            />
         </a>
         <a className="project" href="./placeholder.html">
            <h3>Festival Decoration</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/festival.jpg")}
               alt="A cemetary at dusk with many tall trees and bright candles at the gravestones."
            />
         </a>
         <a className="project" href="./placeholder.html">
            <h3>Subway Design</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/subway.jpg")}
               alt="The main deck inside a large subway station, with the viewer facing two escalators heading upwards."
            />
         </a>
         <a className="project" href="./placeholder.html">
            <h3>Tourism Planning</h3>
            <img
               className="placeholder-img"
               src={require("../assets/img/tourism.jpg")}
               alt="A lakeside town at dawn with great mountains in the background."
            />
         </a>
      </section>
   );
}

export default Portfolio;
