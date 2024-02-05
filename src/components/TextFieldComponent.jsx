import { Button } from "@mui/material/Button";
import { TextField } from "@mui/material/TextField";
import { Fragment } from "react";
const TextFieldComponent = () => {
    return(
        <Fragment>
            <TextField id="outlined-basic" label="Username/Email" variant="outlined"/>
            <TextField id="outlined-basic" label="Password" variant="outlined"/>
            <Button variant="outlined">Login</Button>
        </Fragment>
    );
};
export default TextFieldComponent;