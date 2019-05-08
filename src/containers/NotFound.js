import React from 'react';
import styled from 'styled-components';
import Wrap from '../components/wrapper';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Wrap>
    <AboutContent>
      <Title>404 page not found</Title>
      <Body>
        Sorry. There s nothing to see here <Link to={'/'} >Go to Home</Link>
      </Body>
    </AboutContent>
  </Wrap>
);

export default NotFound;

const AboutContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: auto;
`;

const Title = styled.h3`
  font: 400 48px/68px Helvetica, Arial, sans-serif;
  margin: 40px;
`;
const Body = styled.p`
  margin: 0 40px 30px 40px;
`;
