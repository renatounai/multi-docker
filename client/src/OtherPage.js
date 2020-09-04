import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Sou outra página!
      <Link to="/">Go back home</Link>
    </div>
  );
};
