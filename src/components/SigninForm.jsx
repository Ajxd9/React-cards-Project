import { Button, TextField, Typography, colors } from "@mui/material";
import { Stack, bgcolor } from "@mui/system";
import React, { useState } from "react";
import { ScreenMode } from "../pages/LoginPage/SigninPage";
const SigninForm = ({onSwitchMode }) => {
    const [inputsValue, setInputsValue] = useState({
        email:"",
        password:"",
     });
      const handleInputsChange =(e)=>{
         setInputsValue((CopyOfCurrentValue)=>{
            CopyOfCurrentValue[e.target.id]=e.target.value;
            return {...CopyOfCurrentValue};
         });
     }
    return(
        
       <Stack justifyContent="center" alignItems="center" sx={{height:"100%",color:colors.grey[800]}}>
        <Stack spacing={5} sx={{width:"100%",maxWidth:"500px"}}>
            <Stack>
            <Typography variant="h4" fontWeight={600} color={colors.grey[800]}>
                Welcome Back
            </Typography>
            <Typography color={colors.grey[600]}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Typography>
                </Stack>
        
        <Stack spacing={4}>
            <Stack spacing={2}>
                <Stack spacing={1}>
                <TextField margin="normal"
                     required 
                     fullWidth 
                     id='email' 
                     label='Email Address' 
                     name="email" 
                     autoComplete="email" 
                     autoFocus 
                     value={inputsValue.email}  
                     onChange={handleInputsChange}
                     />
                 </Stack>
                <Stack spacing={1}>
                    <TextField 
                    margin="normal"
                    required
                    fullWidth 
                    name="password"
                    label="password" 
                    type="password" 
                    id="password" 
                    autoComplete="current-password" 
                    value={inputsValue.password} 
                    onChange={handleInputsChange}
                />
                </Stack>
                <Button variant="contained" size="large" sx={{bgcolor:colors.grey[800],"&:hover":{bgcolor:colors.grey[600]}}}>Sign In</Button>
            </Stack>
            </Stack>
            <Stack direction="row" spacing={2}>
                <Typography>Don't have an account?</Typography>
                <Typography onClick={()=>onSwitchMode(ScreenMode.SIGN_UP)} fontWeight={600} sx={{cursor:"pointer",userSelect:"none"}}>Sign up now</Typography>
            </Stack>
        </Stack>
       </Stack>
    );
};
export default SigninForm;