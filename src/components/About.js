import React from "react";
import Links from "./Links";

function About({bio, link}) {
  if(!bio){
    return null
  }else{
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
        <Links links = {link}/>
      </div>
    );
  }
}

export default About;
