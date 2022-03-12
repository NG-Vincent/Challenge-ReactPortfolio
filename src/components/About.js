function About(props) {
   return (
      <section>
         <h2>About Me</h2>

         <div className="about-img">
            <img
               src={require("../assets/img/portrait.jpg")}
               alt="My Portrait!"
            />
         </div>

         <p className="about-text">
            Hey, I'm Vincent, and I love tech! Programming has been a big hobby
            of mine since my teenage years, and I hope to put my talents to good
            use. I have confidence in the entirety of full-stack development,
            whether that be the front-end user experience, or the back-end
            server optimization. Below, you will find my various projects,
            including my schoolwork and even some of my hobby work.
         </p>
      </section>
   );
}

export default About;
