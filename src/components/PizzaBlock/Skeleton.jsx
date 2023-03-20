import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="139" r="139" />
    <rect x="0" y="297" rx="10" ry="10" width="273" height="23" />
    <rect x="0" y="334" rx="10" ry="10" width="272" height="65" />
    <rect x="0" y="413" rx="10" ry="10" width="95" height="30" />
    <rect x="147" y="414" rx="10" ry="10" width="122" height="30" />
  </ContentLoader>
);

export default Skeleton;
