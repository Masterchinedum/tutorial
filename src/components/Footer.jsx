import React from 'react';


function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>Copyright © 2023 My Website</p>
        <ul>
          <li><a href="/about">About</a></li> 
          <li><a href="/contact">Contact</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
        <p>
          Built with React by John Doe. View the <a href="/">source code</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
