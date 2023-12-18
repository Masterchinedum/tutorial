import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Card(props) {
  // destructure the props object
  const { name, photo, email, github, linkedin, twitter, role, website, about, interests, facebook, instagram } = props;

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
        <h3 className='detail'>
          About
        </h3>
        <p className='card-text'>{about}</p>
        <h3 className='detail'>
          Interests
        </h3>
        <p className='card-text'>{interests}</p>
      </div>
      <div className="card-footer">
        <a href={twitter} className="card-icon">
        <FontAwesomeIcon icon={faTwitter} className="footericon" />
        </a>
        <a href={facebook} className="card-icon">
        <FontAwesomeIcon icon={faFacebook} className="footericon" />
        </a>
        <a href={instagram} className="card-icon">
          <FontAwesomeIcon icon={faInstagram} className="footericon" />
        </a>
        <a href={github} className="card-icon">
          <FontAwesomeIcon icon={faGithub} className="footericon" />
        </a>
      </div>
    </div>
  );
}

export default Card;
