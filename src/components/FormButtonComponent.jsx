import {React,memo} from 'react';
import Button from '@mui/material/Button';

const FormButtonComponent = ({ color, children, onClick,shape }) => {

  return (
          <Button type='submit' fullWidth variant="contained"  color={color} onClick={onClick} sx={{ mt: 3, mb: 2 }}>  
            {children}
          </Button>
        );
      };
export default memo(FormButtonComponent);
