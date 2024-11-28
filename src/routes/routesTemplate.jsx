import React from 'react';
import { Router } from '@reach/router';
import { routes, FallbackRoute } from './routeConfig';

const RouteTemplate = () => {
  return (
    <Router>
      {routes.map(({ path, Component }, index) => {
       console.log(`rendering routes : ${path}`);
       return <Component key={index} path={path} />;
      })}
      {FallbackRoute && <FallbackRoute default />}
    </Router>
  );
};

export default RouteTemplate;
