import { Container } from '@mui/system';
import React from 'react';


const MainComponent = ({children}) => {
  return (
    <div>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default MainComponent;
