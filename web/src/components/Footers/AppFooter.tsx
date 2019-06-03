import React from 'react';

const AppFooter: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const creationYear: number = 2019;

  return (
    <footer style={
      {
        alignSelf: 'center',
        display: 'flex',
      }
    }>
      <small>
        &copy;
        {
          currentYear > creationYear ?
          `${creationYear}` + ' - ' + `${currentYear}` :
          currentYear
        }
        <a
          className="Nav-link"
          href="https://github.com/Dimetriu/Shortencrafts-rails"
          title="source"
          target="_blank"
          rel="noreferrer noopener"
        >
          developed by Dmytro Rashydov
        </a>
      </small>
    </footer>
  );
}

export default AppFooter;
