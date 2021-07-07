import React from 'react';
import './styles.css';

const AppFooter: React.FC = () => {
  let currentYear: number = new Date().getFullYear();
  let creationYear: number = 2019;

  return (
    <small>
      &copy;&nbsp;
      {
        currentYear > creationYear ?
        `${creationYear}` + ' - ' + `${currentYear}` :
        `${currentYear}`
      }
      <a
        className="Nav-link"
        href="https://github.com/Dimetriu/Shortencrafts-rails"
        title="source"
        target="_blank"
        rel="noreferrer noopener"
      >
        &nbsp;developed by Dmytro Rashydov
      </a>
    </small>
  );
}

export default AppFooter;
