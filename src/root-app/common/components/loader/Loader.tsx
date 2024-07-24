import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LoaderWrapper, Loader } from './Loader.styled';

const LoadingComponent = () => {
  return (
    <LoaderWrapper>
      <Loader role="progressbar" />
    </LoaderWrapper>
  );
};

export default LoadingComponent;
