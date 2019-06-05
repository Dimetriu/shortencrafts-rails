import React from 'react';
import ContentLoader from 'react-content-loader';

export const TopNavContentLoader: React.FC = () => {
  return (
    <ContentLoader
      height={20}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="5" y="7" rx="1" ry="1" width="50" height="5" />
      <rect x="350" y="7" rx="1" ry="1" width="20" height="5" />
      <rect x="375" y="7" rx="1" ry="1" width="20" height="5" />
    </ContentLoader>
  );
}

export const FooterContentLoader: React.FC = () => {
  return (
    <ContentLoader
      height={20}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="150" y="7" rx="1" ry="1" width="100" height="5" />
    </ContentLoader>
  );
}
