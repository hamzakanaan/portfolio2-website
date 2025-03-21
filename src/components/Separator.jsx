import React from 'react';
import styled from 'styled-components';

const SeparatorContainer = styled.div`
  padding: 3rem 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${props => props.theme.gradient};
  opacity: 0.2;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 2px;
    background: ${props => props.theme.gradient};
    opacity: 0.8;
  }
`;

const Separator = () => {
  return (
    <SeparatorContainer>
      <Line />
    </SeparatorContainer>
  );
};

export default Separator; 