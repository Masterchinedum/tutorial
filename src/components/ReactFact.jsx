import React from 'react';
import reactjsicon from "./images/reactjs-icon.png";
import reacthalf from "./images/Group.png";

const ReactFact = () => {
  return (
    <div className= 'reactcontainer'>
      <div className='reactfact'>
        <div className='reacfactnav'>
          <div className='namelogo'>
            <img src={reactjsicon} alt="React logo" className='logo2'/>
            <h3>ReactFact</h3>
          </div>
          <div className='linksContainer'>
            <h3>React Course - Project 1</h3>
          </div>
        </div>
        <div className='reactfactmain'>
          <h2>Interesting React Facts</h2>
          <ul>
            <li>React was created by Facebook's software engineering team.</li>
            <li>React was initially released in March 2013 as an open-source project on GitHub.</li>
            <li>The name "React" is an acronym for "Rapid Application Development" and was chosen by Facebook engineer Jordan Walke.</li>
            <li>React allows developers to create large, complex web applications that can change data without reloading the page.</li>
            <li>React uses a virtual DOM (Document Object Model) to track changes and updates the actual DOM only when necessary.</li>
          </ul>
        </div>
      </div>
    </div>
 )
}

export default ReactFact;