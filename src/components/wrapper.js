import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children, id, className }) => (
    <Wrap id={id} className={className}>
        {children}
    </Wrap>
);

export default Wrapper;

const Wrap = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: normal;
    align-items: stretch;

    @media(min-width:320px){
        width: 100%;
    }
    @media(min-width:768px){
        width: 100%;
    }
    @media(min-width:1024px){
        width: 984px;
    }
    @media(min-width:1280px){
        width: 1240px;
    }
`;
