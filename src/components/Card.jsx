import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter, faFacebook, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Card(props) {
  const { name, photo, email, github, linkedin, twitter, facebook, instagram, role, website, about, interests } = props;

  return (
    <div className="card">
      <div className="card-header">
        <img src={photo} alt={name} className="card-photo" />
      </div>
      <div className="card-body">
        {name && (
        <h1 className="card-name">{name}</h1>
        )}
        {role && (
        <p className="card-role">{role}</p>
        )}
        {website && (
        <p className="card-website">{website}</p>
        )}
        <div className='btn-container'>
          {email && (
            <a href={email}>
              <button className="btn btn-email">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                Email
              </button>
            </a>
          )}
          {linkedin && (
            <a href={linkedin}>
              <button className="btn btn-linkedin">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
                Linkedin
              </button>
            </a>
          )}
        </div>
        {about && ( <>
        <h3 className='detail'>About</h3>
        <p className='card-text'>{about}</p>
        </>
        )};
        {interests && (
          <>
            <h3 className='detail'>Interests</h3>
            <p className='card-text'>{interests}</p>
          </>
        )}
      </div>
      <div className="card-footer">
        {twitter && (
          <a href={twitter} className="card-icon">
            <FontAwesomeIcon icon={faTwitter} className="footericon" />
          </a>
        )}
        {facebook && (
          <a href={facebook} className="card-icon">
            <FontAwesomeIcon icon={faFacebook} className="footericon" />
          </a>
        )}
        {instagram && (
          <a href={instagram} className="card-icon">
            <FontAwesomeIcon icon={faInstagram} className="footericon" />
          </a>
        )}
        {github && (
          <a href={github} className="card-icon">
            <FontAwesomeIcon icon={faGithub} className="footericon" />
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;
