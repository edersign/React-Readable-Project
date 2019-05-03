import React from 'react';
import styled from 'styled-components';
import Wrap from '../components/wrapper';

const About = () => (
  <Wrap>
    <AboutContent>
      <Title>Readeble Project - Udacity</Title>
      <Body>
        This is a project for Udacity&apos;s Redux course, develop from{' '}
        <a
          href="https://github.com/edersign/readable"
          title="Second Project with Udacity - React Developement "
        >
          @edersign - Second Project with Udacity - React Developement
        </a>
        .
      </Body>
    </AboutContent>
  </Wrap>
);

export default About;

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
