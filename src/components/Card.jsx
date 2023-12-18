import React from 'react';
import './Card.css';

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
        <p className="card-email">{email}</p>
        <p className="card-phone">{phone}</p>
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
