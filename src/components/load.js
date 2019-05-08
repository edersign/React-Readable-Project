import React from 'react';
import styled, { keyframes } from 'styled-components';

const VoteScore = () => (
  <Wrapper>
    <Loader />
  </Wrapper>
);

export default VoteScore;

const Wrapper = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const donutSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const Loader = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #5778f3;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${donutSpin} 1.2s linear infinite;
`;
