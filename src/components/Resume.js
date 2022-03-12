import resumeFile from "../assets/doc/Resume_Vincent_Nguyen.pdf";

function Resume(props) {
   return (
      <section className="resume">
         {/* header */}
         <h2>Resume</h2>
         <p>
            <a href={resumeFile} download="Resume_Vincent_Nguyen">
               Click here to download!
            </a>
         </p>
         <br />

         <h3>Vincent Nguyen</h3>
         <p>Digital Templator at Stone Design Concepts</p>

         <h3>Summary</h3>
         <p>
            Big lover of technology and software! Also not afraid of getting his
            hands dirty on occasion.
         </p>

         {/* skills */}
         <h3>Skills and Tools</h3>

         <h4>Programming</h4>
         <p>JavaScript</p>
         <p>CSS</p>
         <p>HTML</p>
         <p>Python</p>
         <p>C</p>
         <p>Regular expressions (Regex)</p>

         <h4>Software</h4>
         <p>AutoCAD</p>
         <p>LabVIEW</p>
         <p>RsLogix</p>
         <p>AutoHotkey</p>
         <p>Arduino</p>
         <p>Photoshop</p>
         <p>Word</p>
         <p>Excel</p>
         <p>Blender</p>
         <p>Alphacam</p>

         {/* experience */}
         <h3>Experience</h3>

         <h4>Stone Design Concepts</h4>
         <p>Digital Templator</p>
         <p>June 2021 - Present</p>

         <h4>Funhaven Prime Entertainment Inc.</h4>
         <p>Technician</p>
         <p>October 2019 - Present</p>

         <h4>Absopulse Electronics Ltd.</h4>
         <p>Engineering Technician</p>
         <p>January 2018 - June 2021</p>

         <h4>VESTA Design Centre</h4>
         <p>Digital Templator</p>
         <p>July 2019 - March 2020</p>

         <h4>UPS</h4>
         <p>Package Handler</p>
         <p>December 2014 - May 2018</p>

         {/* education */}
         <h3>Education</h3>

         <h4>University of Toronto School of Continuing Studies</h4>
         <p>Computer Programming </p>
         <p>October 2021 - March 2022</p>

         <h4>Algonquin College of Applied Arts and Technology</h4>
         <p>
            Diploma of Education, Electrical Engineering Technologies/
            Technicians
         </p>
         <p>September 2011 - June 2014</p>
      </section>
   );
}

export default Resume;
