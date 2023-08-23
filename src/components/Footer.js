import React from 'react';

function Footer () {
  return (
    <footer>
      <nav aria-label="Footer Navigation" role="navigation">
        <ul>
          <li><a href="#" style={{ color: 'tomato', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#" style={{ color: 'tomato', textDecoration: 'none' }}>Women's</a></li>
          <li><a href="#" style={{ color: 'tomato', textDecoration: 'none' }}>Men's</a></li>
          <li><a href="#" style={{ color: 'tomato', textDecoration: 'none' }}>On the Street</a></li>
          <li><a href="#" style={{ color: 'tomato', textDecoration: 'none' }}>The Catwalk</a></li>
          <li><a href='#' style={{ color: 'tomato', textDecoration: 'none' }}>AdWatch</a> </li>
          <li><a href='#' style={{ color: 'tomato', textDecoration: 'none' }}>About</a> </li>
          <li><a href='#' style={{ color: 'tomato', textDecoration: 'none' }}>Tips</a> </li>
        </ul>
      </nav>
      <div className='footerp'>
      &copy; {new Date().getFullYear()} Valet Industries, Inc
      </div>
    </footer>
  );
}

export default Footer;
