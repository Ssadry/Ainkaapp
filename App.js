import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './components/pages/home';
import styled from 'styled-components';

export default function App() {
  return (
    <Container>
      <Home/>
      <StatusBar style="auto"/>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

