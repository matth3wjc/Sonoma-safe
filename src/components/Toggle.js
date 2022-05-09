import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const Toggle = ({handleNavToggle}) => {
    return (
        <div>
            <StyledToggle onClick={handleNavToggle} />
        </div>
    )
}

export default Toggle

const StyledToggle = styled(FaBars)`
  position: fixed;
  top: 5%;
  right: 4%;
  fill: #495159;
  background: rgba(10,10,10,.60);
  padding: .75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
  z-index: 999;
`;