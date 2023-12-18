import React from 'react';
import './Card.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Card(props) {
  // destructure the props object
  const { name, photo, email, phone, github, linkedin, twitter, role, website } = props;

  return (
    <div className="card">
      <div className="card-header">
        <img src={photo} alt={name} className="card-photo" />
      </div>
      <div className="card-body">
        <h1 className="card-name">{name}</h1>
        <p className="card-role"> {role} </p>
        <p className="card-website"> {website} </p>
        <div className='btn-container'>
          <a href= {email}>
            <button className="btn btn-email">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              Email
            </button>
          </a>
          <a href= {linkedin}>
            <button className="btn btn-linkedin">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              Linkedin
            </button>
          </a>
        </div>
        <h3>
          about
        </h3>
      </div>
      <div className="card-footer">
        <a href={github} className="card-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href={linkedin} className="card-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={twitter} className="card-icon">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
