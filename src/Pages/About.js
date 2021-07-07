import React from "react";
import PagesTitle from "../Components/PagesTitle";
import Skills from '../Components/Skills'

function About() {
  return (
    <>
    {/* My Info Section */}
      <PagesTitle title={"About "} span={"Me"} />
      <div className="main-text">
        <h2>
          Hi, My name is<span> Danish Shaikh</span>.
        </h2>
        <h5>
          I am an Engineering Student studying at Savitribai Phule Pune
          University (SPPU). I have been learning web development for the past 6
          months and gradually I have been getting good in this field. I am
          learning things in programming for the past 1 year and got some
          experience in the python language but my main focus is on Web
          Development. I will be adding a lot of projects to this webpage about
          web development and also other programming languages, if you want the
          source code for the project then contact me. I do freelancing on
          Fiverr. Feel Free to ask me for any work related to web development.
          You can contact me on the contact details given below. Also, this
          webpage is designed by Me.
        </h5>
      </div>
      <div className="detailsme">
        <div className="rightsection">
          <p>Full Name </p>
          <p>Age </p>
          <p>Languages </p>
          <p>D.O.B</p>
          <p>Naionality</p>
          <p>Country </p>
          <p>Gender </p>
        </div>
        <div className="leftsection">
          <p>: Danish Shaikh</p>
          <p>: 19</p>
          <p>: English, Hindi, Marathi & Urdu</p>
          <p>: 5 December 2001</p>
          <p>: Indian</p>
          <p>: India</p>
          <p>: Male</p>
        </div>
      </div>
      <button className="cv">Download CV</button>

      {/* Skill Section */}
      <PagesTitle title={"My "} span={"Skills"} />
      <div className="skill-tab">
        <Skills heading={"JavaScript"} Text={'60%'} />
        <Skills heading={"React Js"} Text={'70%'} />
        <Skills heading={"Python"} Text={'40%'} />
        <Skills heading={"Web Design"} Text={'40%'} />
        <Skills heading={"C/C++ Development"} Text={'30%'} />
        <Skills heading={"Java"} Text={'25%'} />
      </div>
    </>
  );
}

export default About;
