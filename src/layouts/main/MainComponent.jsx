import { Container } from '@mui/system';
import React from 'react';


const MainComponent = ({children}) => {
  return (
    <div>
      <Container sx={{mt:5, mb:10}}>
        {children}
      </Container>
    </div>
  );
};

export default MainComponent;
