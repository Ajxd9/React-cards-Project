import { Button } from "@mui/material";
import { Children } from "react";
import propTypes from "prop-types";

const ButtonComponent=(props)=>{
    let {variant,color,children}=props;
    return (
        <Button variant={variant} color={color}>
            {children}
        </Button>
    );
};
export default ButtonComponent;