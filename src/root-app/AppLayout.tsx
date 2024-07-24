import React from 'react';
import Nav from './components/nav/Nav';
import { Outlet } from 'react-router-dom';
import { AppWrapper, AppCenter } from './App.styled';

function AppLayout() {
  return (
    <div id="root-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <AppWrapper>
        <AppCenter>
          <Outlet />
        </AppCenter>
      </AppWrapper>
    </div>
  );
}

export default AppLayout;
