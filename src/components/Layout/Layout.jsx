import { Sydebar } from 'components/Sydebar/Sydebar';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Sydebar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
