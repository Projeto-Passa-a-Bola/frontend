// src/components/HomePageWrapper.jsx

import React from 'react';
import Inicio from './Inicio';
import HomeLogada from './HomeLogada';

function HomePageWrapper() {
  const token = localStorage.getItem('authToken');

  if (token) {
    return <HomeLogada />;
  } else {
    return <Inicio />;
  }
}

export default HomePageWrapper;