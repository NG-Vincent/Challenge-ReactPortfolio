function Portfolio(props) {
   const projects = [
      // title: header text
      // img: image filename
      // alt: html image alt text
      // github: URL of github repository
      // deploy: URL of deployed app
      {
         title: "Jibber jabber",
         img: "jibberjabber",
         alt: "Webpage of a chat messaging app.",
         github: "https://github.com/KKkaran/Jibber-Jabber/",
         deploy: "https://jibber-jabber-app.herokuapp.com//",
      },
      {
         title: "Job Tracker",
         img: "jobtracker",
         alt: "Webpage of a job tracking app.",
         github: "https://github.com/NG-Vincent/P2G2-JobTracker/",
         deploy: "https://safe-cove-20593.herokuapp.com/",
      },
      {
         title: "Lyrics Finder",
         img: "lyricsfinder",
         alt: "Webpage of a song and lyric search engine.",
         github: "https://github.com/chamibia/lyrics-finder/",
         deploy: "https://chamibia.github.io/lyrics-finder/",
      },
      {
         title: "Run Buddy",
         img: "runbuddy",
         alt: "A runner tying their shoes and getting ready to go for a jog.",
         github: "https://github.com/NG-Vincent/run-buddy/",
         deploy: "https://ng-vincent.github.io/run-buddy/",
      },
      {
         title: "Note Taker",
         img: "notetaker",
         alt: "Webpage of a note taking app.",
         github: "https://github.com/NG-Vincent/Challenge-NoteTaker/",
         deploy: "https://intense-springs-39510.herokuapp.com/",
      },
      {
         title: "Tech Blog",
         img: "techblog",
         alt: "Webpage of a tech blog app.",
         github: "https://github.com/NG-Vincent/Challenge-TechBlog/",
         deploy: "https://sleepy-brook-70860.herokuapp.com//",
      },
      {
         title: "Budget Tracker",
         img: "budgettracker",
         alt: "Webpage of a budget tracker app.",
         github: "https://github.com/NG-Vincent/Challenge-BudgetTracker/",
         deploy: "https://ancient-beyond-15125.herokuapp.com/",
      },
   ];

   return (
      <section id="projects">
         {/* section header */}
         <h2>Projects</h2>
         {/* array mapping */}
         {projects.map((info) => (
            <div className="project" key={info.title}>
               {/* header */}
               <h3>{info.title}</h3>
               {/* image */}
               <img
                  className="project-img"
                  src={require(`../assets/img/${info.img}.jpg`)}
                  alt={info.alt}
               />
               {/* links */}
               <span className="links-wrapper">
                  <a href={info.deploy} target="_blank" rel="noreferrer">
                     Open App
                  </a>{" "}
                  /{" "}
                  <a href={info.github} target="_blank" rel="noreferrer">
                     Github Repo
                  </a>
               </span>
            </div>
         ))}
      </section>
   );
}

export default Portfolio;
